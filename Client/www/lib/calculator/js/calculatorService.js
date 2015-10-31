angular.module("calculator")
	.factory("calculatorService",["$http",function($http) {
		// index of items by id
		var itemsIndexedById = {}

		// index of items sorted by type
		var itemsIndexedByType = {}

		// Index of item types
		var itemTypes = [];

		// Has the array of itemTypes been successfully loaded from the server
		var itemsReady = false;
		// Has the items array been successfully loaded from the server
		var typesReady = false;

		// donations indexed by the item id of the donated item
		var donations = {};

		/**
		 *	DonateableItemType Constructor
		 *	@param {Object} details for a donateable item type
		 */
		function DonateableItemType(type) {
			this.id = type.id;
			this.name = type.name;
		}

		/**
		 *	DonateableItem Constructor
		 *	@param {Object} details for a donateable item
		 */
		function DonateableItem(item) {
			this.id = item.id;
			this.type = item.type;
			this.name = item.name;
			this.cost = item.price;
		}

		/**
		*	Donation constructor
		*	@param {DonateableItem} item 		the id of the item being donated
		*   @param {Number} 		quantity	the quantity of the item being donated
		*/
		function Donation(item, quantity) {
			this.item = item;
			this.itemQuantity = quantity;
		}

		/**
		 * Load all items from the server
		 */
		function loadDonateableItems() {
			$http({
				method: "GET",
				url: "lib/calculator/data/items.json"
			}).then(function(response){
				response.data.forEach(function(x) {
					var donateableItem = new DonateableItem(x);

					itemsIndexedById[donateableItem.id] = donateableItem;

					if(typeof itemsIndexedByType[x.type] === "undefined") {
						itemsIndexedByType[x.type] = [];
					}
					itemsIndexedByType[x.type].push(donateableItem);
				})

				itemsReady = true;
			})
		}

		/**
		 *	Load all item types from the server
		 */
		function loadItemTypes() {
			$http({
				method: "GET",
				url: "lib/calculator/data/itemTypes.json"
			}).then(function(response){
				itemTypes = response.data.map(function(x) {
					return new DonateableItemType(x);
				});

				typesReady = true;
			})
		}

		/**
		*	Add a new donation
		*	@param {Donation}	donation a donation to add to the receipt
		*	@return {Donation | null}	returns a new donation object if this 
		*	is the first donation of this itemId, else null
		*/
		function addDonation(itemId, quantity) {
			// there aren't any of this item already being donated
			if(! donations[itemId]) {
				var item = itemsIndexedById[itemId];

				var currentDonation = new Donation(item, quantity);
				donations[itemId] = currentDonation;
				return currentDonation;
			}
			// some of this item is already being donated
			else {
				donations[itemId].itemQuantity += quantity;
				return null;
			}
		}

		// initialize itemTypes and donateableItems
		loadItemTypes();
		loadDonateableItems();

		return {
			Donation : Donation,
			isReady : function() { return itemsReady && typesReady; },
			getTypesArray : function() {
				return itemTypes;
			},
			addDonation : addDonation,
			getDonateableItemsByType : function(x) {
				return itemsIndexedByType[x];
			},
			totalDonations : function(donationArray) {
				return donationArray.reduce(function(carry, d) {
					return carry + d.itemQuantity * d.item.cost;
				}, 0);
			}
		};
	}])
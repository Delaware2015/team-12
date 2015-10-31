angular.module("calculator",[])
	.controller("calculatorController",["calculatorService", "$scope", function(calculatorService,$scope) {
		
		// item types
		$scope.typesArray = calculatorService.getTypesArray();
		// available items of the selected sub-type
		$scope.itemOptions = [];
		// true if the information needed for form has been fetched from server
 		$scope.showAddNew = false;
		// basket of items being donated
		$scope.basket = [];
		// a new donation
		$scope.newDonation = {
			quantity : 0,
			typeId : 0,
			itemId : 0
		}
		// total of all donations in basket
		$scope.total = 0;

		/**
		*	Add a new item to the list and update the total
		*/
		$scope.addItem = function(newDonation) {
			if(newDonation.quantity > 0) {
				var donation = calculatorService.addDonation(newDonation.itemId, newDonation.quantity);
				if(donation) {
					$scope.basket.push(donation);				
				}

				newDonation.typeId = 0;
				newDonation.itemId = 0;
				newDonation.quantity = 0;				
			}
		}

		/**
		 *	On change of the current item type, change the item options to those of this type
		 *	@param {Integer} typeId 	the type of item to submit
		 */
		$scope.itemTypeChange = function(newDonation) {
			console.log(newDonation);
			var itemOptions = $scope.itemOptions;
			// empty the array (we can't assign a new array or ng-repeat will complain)
			itemOptions.splice(0,itemOptions.length);
			// push all items of this type to the array
			Array.prototype.push.apply(
				itemOptions,
				calculatorService.getDonateableItemsByType(newDonation.typeId)
			);
		}

		// Watch for the items and types to be ready
		$scope.$watch(function() {
			return calculatorService.isReady();
		},
		function(newVal, oldval) {
			$scope.typesArray = calculatorService.getTypesArray();
			$scope.showAddNew = true;
		})

		$scope.$watch(function() {
			return calculatorService.getTotal();
		}, function(newVal) {
			$scope.total = newVal;
		})
	}]);
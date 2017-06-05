module.exports = {
    name: 'CookController',
    func: function ($scope, $stateParams, MealService) {
        
            $scope.add = function(meal){

            const newMeal = {
                name: $scope.meal_name,
                recipe: $scope.recipe_url,
                servingCount: parseInt($scope.servings, 10),
                availableTime: $scope.pickup_time,
                category: $scope.category,
                add_info: $scope.add_info,
                street: $scope.street,
                city: $scope.city,
                state: $scope.state,
                zipcode: $scope.zipcode,
            };

                MealService.postMeal(newMeal);
            }
    },
};
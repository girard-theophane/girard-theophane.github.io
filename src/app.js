'use strict';

angular.module('CV', 
[
       'ngMaterial',
       'angular-linq'
])

.config(function($mdThemingProvider) {

  $mdThemingProvider.theme('default')
    .primaryPalette('cyan', {
      'default': '900',
      'hue-1': '100',
      'hue-2': '600',
      'hue-3': '800',
    })

    .accentPalette('red', {
      'default': '900',
      'hue-1': '800',
      'hue-2': '300',
      'hue-3': '50'
    });

})

.controller('CategoriesController', CategoriesController);

// 2) Inject $linq to controller
CategoriesController.$inject = [
       '$scope',
       '$http',
       '$q',
       '$linq'
];

function CategoriesController($scope, $http,$q,$linq) {

       $scope.isLoading= true; 
       $scope.api_categories = $http.get('http://girard-theophane.xyz/rest/testarray', {cache: false});       
       $scope.api_business_card = $http.get('http://girard-theophane.xyz/rest/business_card', {cache: false});

       $q.all([$scope.api_categories, $scope.api_cards,$scope.api_business_card]).then((values) => {
         $scope.cards = values[0].data;          
         $scope.business_card = values[2].data;
         $scope.isLoading= false;
       });

       $scope.findSections =function (skill) {
              console.log(skill);
              var queryResult = $linq.Enumerable().From($scope.cards)
                     .Where(function (x) {
                            return x.category_label.data.acronym == 'CGI'
                     })
                     /*.OrderBy(function (x) {
                            return x.user.screen_name
                     })
                     .Select(function (x) {
                            return x.user.screen_name + ':' + x.text
                     })*/
                     .ToArray();
		console.log("vm.queryResult : ", queryResult);

       }
};


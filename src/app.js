'use strict';

var app = angular.module('CV', ['ngMaterial']);
app.config(function($mdThemingProvider) {

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
      'hue-3': '300'
    });

});

app.controller('CategoriesController', ['$scope','$http','$q', function ($scope, $http,$q) {
       $scope.isLoading= true; 
       $scope.api_categories = $http.get('http://girard-theophane.xyz/rest/testarray', {cache: false});       
       $scope.api_business_card = $http.get('http://girard-theophane.xyz/rest/business_card', {cache: false});

       $q.all([$scope.api_categories, $scope.api_cards,$scope.api_business_card]).then((values) => {
         $scope.cards = values[0].data;          
         $scope.business_card = values[2].data;
         $scope.isLoading= false;
       });
}]);


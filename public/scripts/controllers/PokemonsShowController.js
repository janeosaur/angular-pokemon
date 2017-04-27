// show one pokemon
// edit and delete a pokemon

angular
  .module('pokeApp')
  .controller('PokemonsShowController', PokemonsShowController);


PokemonsShowController.$inject = ['$http', '$routeParams'];

function PokemonsShowController($http, $routeParams) {
  var vm = this;

  $http({
    method: 'get',
    url: 'https://super-crud.herokuapp.com/pokemon/' + $routeParams.id
  }).then(function successCallback(response) {
    console.log('get success ', response.data);
    vm.pokemon = response.data;
  }, function errorCallback(response) {
    console.log('get error ', response)
  });
}

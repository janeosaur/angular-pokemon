angular
  .module('pokeApp')
  .controller('PokemonsIndexController', PokemonsIndexController);


PokemonsIndexController.$inject = ['$http'];

function PokemonsIndexController($http) {
  var vm = this;

  $http({
    method: 'get',
    url: 'https://super-crud.herokuapp.com/pokemon'
  }).then(function successCallback(response) {
    console.log('get success ', response.data.pokemons);
    vm.pokemons = response.data.pokemons;
  }, function errorCallback(response) {
    console.log('get error ', response)
  });



}

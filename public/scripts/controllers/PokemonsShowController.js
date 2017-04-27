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

  vm.deletePokemon = function (pokemon) {
    $http({
      method: 'delete',
      url: 'https://super-crud.herokuapp.com/pokemon/' + $routeParams.id
    }).then(function successCallback(response) {
      // var index = vm.pokemon.indexOf(pokemon);
      // vm.pokemon.splice(index, 1); // are these not needed?
      $location.path('/'); // location is undefined
    }, function errorCallback(response) {
      console.log('error deleting ', response);
    });
  }

}

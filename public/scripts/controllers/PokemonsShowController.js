// show one pokemon
// edit and delete a pokemon

angular
  .module('pokeApp')
  .controller('PokemonsShowController', PokemonsShowController);


PokemonsShowController.$inject = ['$http', '$routeParams', '$location'];

function PokemonsShowController($http, $routeParams, $location) {
  var vm = this;

  $http({
    method: 'get',
    url: 'https://super-crud.herokuapp.com/pokemon/' + $routeParams.id
  }).then(function successCallback(response) {
    // console.log('get success ', response.data);
    vm.pokemon = response.data;
  }, function errorCallback(response) {
    console.log('get error ', response)
  });

  vm.deletePokemon = function (pokemon) {
    $http({
      method: 'delete',
      url: 'https://super-crud.herokuapp.com/pokemon/' + pokemon._id
    }).then(function successCallback(response) {
      // var index = vm.pokemon.indexOf(pokemon);
      // vm.pokemon.splice(index, 1); // are these not needed bc one pokemon is already singled out?
      $location.path('/');
      console.log('success deleting ', response)
    }, function errorCallback(response) {
      console.log('error deleting ', response);
    });
  }

  vm.editPokemon = function (pokemon) {
    $http({
      method: 'put',
      url: 'https://super-crud.herokuapp.com/pokemon/' + pokemon._id,
      data: {
        name : pokemon.name,
        pokedex : pokemon.pokedex,
        image : pokemon.image,
        evolves_from : pokemon.evolves_from
      }
    }).then(function successCallback(response) {
      vm.pokemon = response.data;
      console.log('success editing', vm.pokemon)
    }, function errorCallback(error) {
      console.log('error editing ', error);
    });
  }

}

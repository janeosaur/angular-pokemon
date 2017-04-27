angular
  .module('pokeApp', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];
function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/pokemons/index.html',
      controllerAs: 'PokemonsIndexCtrl',
      controller: 'PokemonsIndexController'
    })
    .when ('/pokemons/:id', {
      templateUrl: '/templates/pokemons/show.html',
      controllerAs: 'PokemonsShowCtrl',
      controller: 'PokemonsShowController'
    })
    .otherwise({
      redirectTo: '/'
    })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    })
}

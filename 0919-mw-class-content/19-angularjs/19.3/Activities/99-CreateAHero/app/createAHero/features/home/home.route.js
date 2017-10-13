angular
    .module('createAHero.home') // No array, as we are "extending" the module
    .config(homeConfig);

function homeConfig($stateProvider) {
    // $stateProvider is an Angular service exposed by the ui-router library
    // this service allows us to define the "states" for our application
    //
    // REMEMBER: AngularJS is a single-page application framework. This means we
    // don't have the concept of "pages" but instead we use the concepts of "states"
    $stateProvider.state({
        name: 'home', // name of the route
        url: '/', // url endpoint for the route
        templateUrl: '/createAHero/features/home/home.html', // The url to the view template
        controller: 'HomeCtrl', // The name of the controller to use for this route
        controllerAs: 'HomeVM' // The namespace for the view to access the view model
    })
}

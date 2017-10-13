angular
    .module('createAHero.dashboard') // No array, as we are "extending" the module
    .config(dashboardConfig);

function dashboardConfig($stateProvider) {
    // $stateProvider is an Angular service exposed by the ui-router library
    // this service allows us to define the "states" for our application
    //
    // REMEMBER: AngularJS is a single-page application framework. This means we
    // don't have the concept of "pages" but instead we use the concepts of "states"
    $stateProvider.state({
        name: 'dashboard', // name of the route
        url: '/dashboard', // url endpoint for the route
        templateUrl: '/createAHero/features/dashboard/dashboard.html', // The url to the view template
        controller: 'DashboardCtrl', // The name of the controller to use for this route
        controllerAs: 'DashboardVM' // The namespace for the view to access the view model
    })
}

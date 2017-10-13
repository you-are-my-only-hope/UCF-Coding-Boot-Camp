angular
    .module('createAHero.story') // No array, as we are "extending" the module
    .config(storyConfig);

function storyConfig($stateProvider) {
    // $stateProvider is an Angular service exposed by the ui-router library
    // this service allows us to define the "states" for our application
    //
    // REMEMBER: AngularJS is a single-page application framework. This means we
    // don't have the concept of "pages" but instead we use the concepts of "states"
    $stateProvider.state({
        name: 'story', // name of the route
        url: '/story?heroName&heroCity&heroGender&heroFights&heroFightOutcome', // url endpoint for the route
        templateUrl: '/createAHero/features/story/story.html', // The url to the view template
        controller: 'StoryCtrl', // The name of the controller to use for this route
        controllerAs: 'StoryVM' // The namespace for the view to access the view model
    })
}

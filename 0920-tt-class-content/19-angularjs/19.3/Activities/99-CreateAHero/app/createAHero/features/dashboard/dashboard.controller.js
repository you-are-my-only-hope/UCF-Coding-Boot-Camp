angular
    .module('createAHero.dashboard') // No array, as we are "extending" the module
    .controller('DashboardCtrl', DashboardCtrl); // Define our controller (Notice the naming convention - uppercase first letter, Ctrl suffix)

function DashboardCtrl($scope, $http, library) {
    var vm = this; // vm stands for View Model - anything on "the vm" is exposed to the view
    resetView();

    function resetView() {
        vm.story = {
            heroName: '',
            heroGender: '',
            heroCity: '',
            heroFights: '',
            heroFightsOutcome: ''
        };

        $http({
            method: 'GET',
            url: 'https://randomuser.me/api/'
        }).then(function(response) {
            vm.story.heroName = response.data.results[0].name.first;
            vm.story.heroGender = response.data.results[0].gender;
            vm.story.heroCity = response.data.results[0].location.city;
        });
    }

    vm.addBook = function() {
        library.addBook(vm.story);
        resetView();
    }
}








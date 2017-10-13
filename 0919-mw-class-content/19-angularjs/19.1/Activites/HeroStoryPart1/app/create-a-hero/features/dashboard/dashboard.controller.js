angular
    .module('createAHero.dashboard') // No array, as we are "extending" the module
    .controller('DashboardCtrl', DashboardCtrl); // Define our controller (Notice the naming convention - uppercase first letter, Ctrl suffix)

function DashboardCtrl($scope) {
    var vm = this; // vm stands for View Model - anything on "the vm" is exposed to the view

    vm.heroName = '';
    vm.heroGender = null;
    vm.heroGenderWord = '';
    vm.heroCity = '';
    vm.heroFights = '';
    vm.heroFightOutcome = '';

    // Let's watch the heroGender for changes
    // anytime the view changes the variable value
    // run the function and change the heroGenderWord
    $scope.$watch(function () {
        return vm.heroGender;
    }, function(newVal, old) {
        if (newVal === 'male') {
            vm.heroGenderWord = 'He';
        } else {
            vm.heroGenderWord = 'She';
        }
    });
}

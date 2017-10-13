angular
    .module('createAHero.home') // No array, as we are "extending" the module
    .controller('HomeCtrl', HomeCtrl); // Define our controller (Notice the naming convention - uppercase first letter, Ctrl suffix)

function HomeCtrl(library) {
    var vm = this; // vm stands for View Model - anything on "the vm" is exposed to the view

    vm.books = library.books;
}

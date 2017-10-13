angular
    .module('createAHero.component.book') // No array, as we are "extending" the module
    .directive('book', Book); // Define our book directive (Notice the naming convention; the directive name is lower-case start & camel-case; the function name is upper-case first & camel-case)

function Book() {
    return {
        restrict: 'E', // Directives can be an element(E) type and/or an attribute(A) type and/or a class(C) type
        scope: { // The properties that can be passed into the VM from the callie of the directive
            // properites are defined with a value defining there prefix
            bookData: '=' // @ - reads the value (one-way binding), = - binds the model (two-way binding), & for function binding
        },
        templateUrl: '/createAHero/features/components/book/book.html', // The url to the view template
        controller: BookCtrl, // The function to use as the controller for this directive
        controllerAs: 'BookVM', // The namespace for the view to access the view model
        bindToController: true // The scope is isolated because we are using controllerAs
    };
}

function BookCtrl() {
    var vm = this; // vm stands for View Model - anything on "the vm" is exposed to the view
}

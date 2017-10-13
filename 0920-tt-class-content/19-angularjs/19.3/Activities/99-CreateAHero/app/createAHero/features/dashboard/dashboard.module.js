// Here we define out dashboard module
// Notice the naming convention!!!
// appName.featureName

angular.module('createAHero.dashboard', [
    // This module does not have any dependencies so an empty array here!
    // Note, we still have to include the array as we are defining the module.
    // Other files that "extend" this module will exclude the array
    'createAHero.component.storyContent',
    'createAHero.component.library'
]);

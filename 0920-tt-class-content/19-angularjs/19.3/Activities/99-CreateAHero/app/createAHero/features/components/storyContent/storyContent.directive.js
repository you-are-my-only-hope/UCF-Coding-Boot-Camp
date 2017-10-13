angular
	.module('createAHero.component.storyContent')
	.directive('storyContent', StoryContent);

function StoryContent() {
	return  {
		restrict: 'E',
		scope: {
			storyData: '='
		},
		templateUrl: '/createAHero/features/components/storyContent/storyContent.html',
		controller: StoryContentCtrl,
		controllerAs: 'StoryContentVM',
		bindToController: true
	}
}

function StoryContentCtrl() {
	
}
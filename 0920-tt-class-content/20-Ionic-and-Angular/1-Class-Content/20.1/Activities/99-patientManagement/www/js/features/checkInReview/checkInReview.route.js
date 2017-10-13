angular
	.module('patientManagement.checkInReview')
	.config(checkInReviewConfig);

function checkInReviewConfig($stateProvider) {
	$stateProvider.state({
		name: 'checkInReview',
		url: '/checkInReview?patientIdx',
		templateUrl: 'js/features/checkInReview/checkInReview.html',
		controller: 'CheckInReviewCtrl',
		controllerAs: 'CheckInReviewVM'
	})
}
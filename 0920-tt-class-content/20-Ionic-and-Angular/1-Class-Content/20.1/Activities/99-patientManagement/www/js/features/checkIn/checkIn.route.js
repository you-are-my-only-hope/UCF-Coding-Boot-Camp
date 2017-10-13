angular
	.module('patientManagement.checkIn')
	.config(checkInConfig);

function checkInConfig($stateProvider) {
	$stateProvider.state({
		name: 'checkIn',
		url: '/checkIn',
		templateUrl: 'js/features/checkIn/checkIn.html',
		controller: 'CheckInCtrl',
		controllerAs: 'CheckInVM'
	})
}
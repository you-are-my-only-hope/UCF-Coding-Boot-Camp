angular
	.module('patientManagement.checkIn')
	.controller('CheckInCtrl', CheckInCtrl);

function CheckInCtrl(patients, $state) {
	var vm = this;

	vm.patientInfo = {
		firstName: '',
		lastName: '',
		dob: ''
	};

	vm.continue = function() {
		var patient = new patients.Patient(
			vm.patientInfo.firstName,
			vm.patientInfo.lastName,
			vm.patientInfo.dob
		);

		patients.patients.push(patient);
		$state.go('checkInReview', {
			patientIdx: patients.patients.length - 1
		})
	}
}
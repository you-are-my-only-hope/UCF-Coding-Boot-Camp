angular
	.module('patientManagement.component.patients')
	.service('patients', PatientsService);

function PatientsService() {
	var patients = [];

	function Patient(firstName, lastName, dob) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.fullName = firstName + ' ' + lastName;
		this.dob = dob;
	}

	return {
		patients: patients,
		Patient: Patient
	}
}

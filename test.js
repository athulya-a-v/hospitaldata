const hospitalmodule = require('./hospitalmodule');

console.log('All Hospitals:');
console.log(hospitalmodule.getAllHospitals());

console.log('Hospital by Name:');
console.log(hospitalmodule.getHospitalByName('Hospital A'));

hospitalmodule.addHospital({ name: 'Hospital C', patientCount: 200, location: 'City Z' });
console.log('Hospital added.');

hospitalmodule.updateHospital('Hospital A', { patientCount: 120 });
console.log('Hospital updated.');

hospitalmodule.deleteHospital('Hospital B');
console.log('Hospital deleted.');

console.log('All Hospitals after modifications:');
console.log(hospitalmodule.getAllHospitals());
const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'hospitalData.json');

// Function to read hospital data from JSON file
const readData = () => {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading data:', error);
    return [];
  }
};

// Function to write hospital data to JSON file
const writeData = (data) => {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
    console.log('Data written successfully.');
  } catch (error) {
    console.error('Error writing data:', error);
  }
};

// Function to get all hospitals
const getAllHospitals = () => {
  return readData();
};

// Function to get hospital by name
const getHospitalByName = (name) => {
  const hospitals = readData();
  return hospitals.find((hospital) => hospital.name === name);
};

// Function to add a new hospital
const addHospital = (hospital) => {
  const hospitals = readData();
  hospitals.push(hospital);
  writeData(hospitals);
};

// Function to update hospital data
const updateHospital = (name, newData) => {
  const hospitals = readData();
  const index = hospitals.findIndex((hospital) => hospital.name === name);
  if (index !== -1) {
    hospitals[index] = { ...hospitals[index], ...newData };
    writeData(hospitals);
    console.log('Hospital updated successfully.');
  } else {
    console.error('Hospital not found.');
  }
};

// Function to delete hospital by name
const deleteHospital = (name) => {
  const hospitals = readData();
  const filteredHospitals = hospitals.filter((hospital) => hospital.name !== name);
  if (hospitals.length !== filteredHospitals.length) {
    writeData(filteredHospitals);
    console.log('Hospital deleted successfully.');
  } else {
    console.error('Hospital not found.');
  }
};

// Example usage
// Add a new hospital
addHospital({ name: 'Hospital C', patientCount: 200, location: 'City Z' });

// Update hospital data
updateHospital('Hospital A', { patientCount: 120 });

// Delete hospital
deleteHospital('Hospital B');

// Get all hospitals
const allHospitals = getAllHospitals();
console.log('All Hospitals:', allHospitals);


module.exports = {
    getAllHospitals,
    getHospitalByName,
    addHospital,
    updateHospital,
    deleteHospital
};

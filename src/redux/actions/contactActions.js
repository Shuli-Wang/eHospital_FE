/*
import axios from 'axios';

const BASE_URL = 'https://eHospital_BE-22ed6864d5f3.herokuapp.com'; // Update with your node backend app URL

export const fetchContactUs = () => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/users/contact_us`);
    dispatch({ type: 'FETCH_PATIENT_REGISTRATION_SUCCESS', payload: response.data });
  } catch (error) {
    console.error('Error fetching patient registration:', error);
    dispatch({ type: 'FETCH_PATIENT_REGISTRATION_FAILURE' });
  }
};
*/

import axios from 'axios';

const BASE_URL = 'https://e-react-node-backend-22ed6864d5f3.herokuapp.com'; // Update with your node backend app URL
//const BASE_URL = 'http://localhost:8080'; // Update with your node backend app URL


export const fetchPatientRegistration = () => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/users/patients`);
    dispatch({ type: 'FETCH_PATIENT_REGISTRATION_SUCCESS', payload: response.data });
  } catch (error) {
    console.error('Error fetching patient registration:', error);
    dispatch({ type: 'FETCH_PATIENT_REGISTRATION_FAILURE' });
  }
};
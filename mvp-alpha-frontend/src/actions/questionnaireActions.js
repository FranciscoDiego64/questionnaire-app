import axios from 'axios';
import {
    FETCH_QUESTIONNAIRES,
    FETCH_QUESTIONNAIRES_SUCCESS,
    FETCH_QUESTIONNAIRES_FAILURE,
    FETCH_QUESTIONNAIRES_REQUEST
  } from './types';

export const fetchQuestionnaires = () => dispatch => {
    console.log('Fetching questionnaires...');  // Add this line
    axios.get('http://localhost:8000/api/questionnaires')
    .then(response => {
        console.log('Response received:', response);  // Add this line
        dispatch({
            type: FETCH_QUESTIONNAIRES_SUCCESS,
            payload: response.data
        })
    })
    .catch(error => {
        console.log('Error occurred:', error);  // Add this line
        dispatch({
            type: FETCH_QUESTIONNAIRES_FAILURE,
            payload: error
        })
    });
}

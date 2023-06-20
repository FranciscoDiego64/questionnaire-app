import {
    FETCH_QUESTIONNAIRES_REQUEST,
    FETCH_QUESTIONNAIRES_SUCCESS,
    FETCH_QUESTIONNAIRES_FAILURE,
  } from '../actions/types';
  
  const initialState = {
    loading: false,
    questionnaires: [],
    questions: [],  // New state property
    error: ''
  };
  
  export default function questionnaireReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_QUESTIONNAIRES_REQUEST:
        return {
          ...state,
          loading: true
        };
      case FETCH_QUESTIONNAIRES_SUCCESS:
        return {
          ...state,
          loading: false,
          questionnaires: action.payload,
          questions: action.payload[0].questions,  // Populate questions with questions of first questionnaire
          error: ''
        };
      case FETCH_QUESTIONNAIRES_FAILURE:
        return {
          ...state,
          loading: false,
          questionnaires: [],
          error: action.payload
        };
      default:
        return state;
    }
  }
  
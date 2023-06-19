// reducers/index.js
import { combineReducers } from 'redux';
import questionnaireReducer from './questionnaireReducers';

export default combineReducers({
  questionnaires: questionnaireReducer,
});

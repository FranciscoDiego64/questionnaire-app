// In your questionnaireReducer.js

import { FETCH_QUESTIONNAIRES_SUCCESS, FETCH_QUESTIONNAIRES_FAILURE } from '../actions/types';

const initialState = {
    items: [],
    loading: false,
    error: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_QUESTIONNAIRES_SUCCESS:
            return {
                ...state,
                items: action.payload,
                loading: false,
                error: null
            };
        case FETCH_QUESTIONNAIRES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}

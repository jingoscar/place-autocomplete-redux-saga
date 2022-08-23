import { 
    SEARCH_PLACES,
    SEARCH_PLACES_SUCCESS,
    SEARCH_PLACES_FAILURE,

    GET_HISTORY,
    GET_HISTORY_SUCCESS,
    GET_HISTORY_FAILURE,

    SAVE_HISTORY,
    SAVE_HISTORY_SUCCESS,
    SAVE_HISTORY_FAILURE,

    REMOVE_HISTORY,
    REMOVE_HISTORY_SUCCESS,
    REMOVE_HISTORY_FAILURE,
 } from "../actions/types";

 const INITIAL_STATE = {
    places: [],
    searchHistory: [],
    loading: false,
    loadingUpdate: false,
    message: '',
 };

 export default (state, action) => {
    if (typeof state === 'undefined') {
        return INITIAL_STATE;
    }
    switch (action.type) {
        case SEARCH_PLACES:
            return {
                ...state,
                places: [],
                loading: true,
            };
    
        case SEARCH_PLACES_SUCCESS:
            return {
                ...state,
                places: [...action.payload],
                loading: false,
            };

        case SEARCH_PLACES_FAILURE:
            return {
                ...state,
                places: [],
                loading: false,
                message: action.payload,
            };
        
        case SAVE_HISTORY:
            return{
                ...state,
                loadingUpdate: false,
            }
        
        case SAVE_HISTORY_SUCCESS:
            return{
                ...state,
                places: [...action.payload],
                loadingUpdate: false,
            }

        case SAVE_HISTORY_FAILURE:
            return{
                ...state,
                places: [],
                loadingUpdate: false,
                
            }
        case GET_HISTORY:
            return{
                ...state,
                searchHistory: [],
                loading: true,
            }
        case GET_HISTORY_SUCCESS:
            return{
                ...state,
                searchHistory: [...action.payload],
                loading: false,
            }
        case GET_HISTORY_FAILURE:
            return{
                ...state,
                searchHistory: [],
                loading: false,
                message: action.payload,
            }
        case REMOVE_HISTORY:
            return{
                ...state,
                loadingUpdate: false,
            }
        case REMOVE_HISTORY_SUCCESS:
            return{
                ...state,
                loadingUpdate: false,
            } 
        default:
            return state;       
    }
 }
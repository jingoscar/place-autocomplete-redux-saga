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
} from "./types";

export const searchPlaces = payload => ({
    type: SEARCH_PLACES,
    payload,
});

export const searchPlacesSuccess = payload => ({
    type: SEARCH_PLACES_SUCCESS,
    payload,
});

export const searchPlacesFailure = payload => ({
    type: SEARCH_PLACES_FAILURE,
    payload,
});

export const getHistory = payload => ({
    type: GET_HISTORY,
    payload,
});

export const getHistorySuccess = payload => ({
    type: GET_HISTORY_SUCCESS,
    payload,
});

export const getHistoryFailure = payload => ({
    type: GET_HISTORY_FAILURE,
    payload,
});

export const saveHistory = payload => ({
    type: SAVE_HISTORY,
    payload,
});

export const saveHistorySuccess = payload => ({
    type: SAVE_HISTORY_SUCCESS,
    payload,
});

export const saveHistoryFailure = payload => ({
    type: SAVE_HISTORY_FAILURE,
    payload,
})

export const removeHistory = payload => ({
    type: REMOVE_HISTORY,
    payload,
})

export const removeHistorySuccess = payload => ({
    type: REMOVE_HISTORY_SUCCESS,
    payload,
})

export const removeHistoryFailure = payload => ({
    type: REMOVE_HISTORY_FAILURE,
    payload,
})
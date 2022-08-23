import { SEARCH_PLACES, GET_HISTORY, SAVE_HISTORY, REMOVE_HISTORY, } from "../actions/types";
import {
    searchPlacesSuccess,
    searchPlacesFailure,
    saveHistorySuccess,
    saveHistoryFailure,
    getHistorySuccess,
    getHistoryFailure,
    removeHistorySuccess,
    removeHistoryFailure,
} from '../actions/place';
import { call, put, fork, takeLatest, select } from "redux-saga/effects";
import api from "../services/api";

function* workerGetPlaceSaga(params){
    try {
        const response = yield call(api.searchPlace);
        if (response.status === 200) {
            yield put(searchPlacesSuccess(response.data));
            
        } else {
            if (response) {
                yield put(searchPlacesFailure(response));
            } else {
                if (response.status){

                }
                yield put(searchPlacesFailure(response.data));
            }
        }
        
    } catch (error) {
        console.log(error);
    }
}

function* workerGetHistorySaga(params) {
    try {
        const response = yield call(api.getHistory);
        if(response.status === 200) {
            yield put(getHistorySuccess(response.data));
        } else {
            if (response) {
                yield put(getHistoryFailure(response));
            }else {
                if (response.status){

                }
                yield put(getHistoryFailure(response.data));
            }
        }
        console.log(response);

    }catch(error){
        console.log(error);
    }
}

function* workerSaveHistorySaga(params) {
    try {
        const state = yield select();
        const duplicatedData = yield state.places.searchHistory.filter(data => {
            return data.name == params.payload.name;
        });

        if (duplicatedData == '') {
            const postResponse = yield call(api.saveHistory, params.payload);
            console.log('post response', JSON.stringify(postResponse));

            if (postResponse.status === 201) {
                yield put(saveHistorySuccess([...state], postResponse.data));
                console.log('success');
            } else {
                yield put(saveHistoryFailure(postResponse));
            }
        } else {
            yield put(saveHistoryFailure('Duplicated data.'));
        }

    } catch (error) {
        console.log(error);
    }
}

function* workerRemoveHistorySaga(params) {
    try {
        const state = yield select();
        const newHistory = yield state.places.searchHistory.filter(data => {
            return data.name !== params.payload.name;
        });
        
        console.log('new history: ' + JSON.stringify(newHistory));

        yield call(api.removeHistory, params.payload);

        yield put(removeHistorySuccess([...newHistory]));
    } catch (error) {
        yield put(removeHistoryFailure(error));
        console.log(error);
    }
}

function* getPlaceSaga() {
    yield takeLatest(SEARCH_PLACES, workerGetPlaceSaga);
}

function* getHistorySaga() {
    yield takeLatest(GET_HISTORY, workerGetHistorySaga);
}

function* saveHistorySaga() {
    yield takeLatest(SAVE_HISTORY, workerSaveHistorySaga);
}

function* removeHistorySaga() {
    yield takeLatest(REMOVE_HISTORY, workerRemoveHistorySaga);
}

export const watcherPlace = [
    fork(getPlaceSaga),
    fork(getHistorySaga),
    fork(saveHistorySaga),
    fork(removeHistorySaga),
];
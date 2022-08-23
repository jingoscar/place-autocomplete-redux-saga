import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducer from "../reducers/rootReducer";
import reduxSaga from "./ReduxSaga";
import ReduxPersist from "./ReduxPersist";

let finalReducers = rootReducer;
if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig;
    finalReducers = persistReducer(persistConfig, rootReducer);
}

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [sagaMiddleware];

const reduxStore = createStore(
    finalReducers,
    composeEnhancer(applyMiddleware(...middleware)),
);

export const persistor = persistStore(reduxStore);
sagaMiddleware.run(reduxSaga);

export const store = reduxStore;
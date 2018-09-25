import { createStore, applyMiddleware, compose  } from "redux";
import thunk from 'redux-thunk';
import rootReducer from './reducer'

const initialize = {};

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer, 
    initialize, 
    composeEnhancers(applyMiddleware(...middleware))
    );

export default store;
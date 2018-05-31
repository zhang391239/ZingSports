import thunkMiddleware from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';

const createStoreWithMidware = applyMiddleware(thunkMiddleware)(createStore);

export default function ConfigureStore(rootReducer,initializeState){
    const store = createStoreWithMidware(rootReducer,initializeState);
    return store;
}
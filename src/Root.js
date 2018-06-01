import {Provider} from 'react-redux';

import React from 'react';
import ConfigureStore from './store/ConfigureStore'
import AccountReducer from './reducer/AccountReducer';
import MapPage from './pages/MapPage';

const store = ConfigureStore(AccountReducer);

export default class Root extends React.Component{

    render(){
        return(
            <Provider store={store}>
                <MapPage/>
            </Provider>
        )
    }
}
import {Provider} from 'react-redux';

import React from 'react';
import ConfigureStore from './store/ConfigureStore'
import * as Reducer from './reducer';

const store = ConfigureStore(Reducer);

export default class Root extends React.Component{

    render(){
        return(
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}
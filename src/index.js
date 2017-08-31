import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import store from './redux/index'
import registerServiceWorker from './registerServiceWorker';
import routerConfig from './router/index'

ReactDOM.render(
    <Provider store={store}>
        {routerConfig}
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

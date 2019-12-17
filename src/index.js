import React from 'react';
import './index.css';

import * as serviceWorker from './serviceWorker';

import {render} from 'react-dom';
import { Provider } from 'react-redux';

//  自己创建的全局store
import store from './store/configureStore';
import App from './App';


render(
    //  通过Provider关键字，把根目录包起来。同时，store存储全
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

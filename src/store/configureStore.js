import {createStore} from 'redux';
import reducers from '../reducers';
import { render } from 'react-dom';


//  创建全局的store，通过全局的reducer来创建
const store = createStore(reducers);

export default store;
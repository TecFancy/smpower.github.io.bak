import {createStore, combineReducers} from 'redux';
import {reducer as headerReducer} from './components/header/';

const reducer = combineReducers({
  header: headerReducer
});

export default createStore(reducer);

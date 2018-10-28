import {combineReducers} from 'redux';
import itemreducer from './itemreducer';


export default combineReducers({
    item: itemreducer
});
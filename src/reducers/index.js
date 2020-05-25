import heroReducer from './hero';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    hero: heroReducer,
});

export default allReducers;
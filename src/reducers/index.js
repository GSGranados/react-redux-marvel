import heroReducer from './hero';
import comicReducer from './comic'
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    hero: heroReducer,
    comic: comicReducer
});

export default allReducers;
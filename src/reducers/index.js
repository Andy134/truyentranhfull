import { combineReducers } from 'redux';
import products from './products';
import itemEditing from './itemEditing';
import posts from './posts';

const appReducers = combineReducers({
    posts,
    products,
    itemEditing
});

export default appReducers;
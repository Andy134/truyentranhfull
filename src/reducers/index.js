import { combineReducers } from 'redux';
import products from './products';
import itemEditing from './itemEditing';
import posts from './posts';
import postCategory from './postCategory';
import category from './category';

const appReducers = combineReducers({
    posts,
    products,
    itemEditing,
    postCategory,
    category
});

export default appReducers;
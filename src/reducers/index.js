import { combineReducers } from 'redux';
import products from './products';
import itemEditing from './itemEditing';
import posts from './posts';
import postCategory from './postCategory';
import category from './category';
import searchPost from './searchPost';

const appReducers = combineReducers({
    posts,
    products,
    itemEditing,
    postCategory,
    category,
    searchPost
});

export default appReducers;
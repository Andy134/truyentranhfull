import * as Types from '../constants/ActionType';
import callApi from '../utils/apiCaller';

import posts from '../components/Datas/Posts.json';
import categories from '../components/Datas/Categories.json';

// POSTS

export const actFetchPostsRequest = () => {
    return (dispatch) => {
        dispatch(actFetchPosts(posts));
    }
}

export const actFetchPosts = (posts) => {
    return {
        type: Types.FETCH_POSTS,
        posts
    }
}

export const actGetPostRequest = (id) => {
    return (dispatch) => {
        dispatch(actGetPost(posts, id));
    }
}

export const actGetPost = (posts, id) => {
    return {
        type: Types.GET_POST,
        posts,
        id
    }
}

export const actFetchSearchPostRequest = (key) => {
    return (dispatch) => {
        dispatch(actFetchSearchPost(posts, key));
    }
}

export const actFetchSearchPost = (posts, key) => {
    return {
        type: Types.SEARCH_POST,
        posts,
        key
    }
}

// CATEGORIES

export const actFetchCategoryRequest = () => {
    return (dispatch) => {
        dispatch(actFetchCategory(categories));
    }
}

export const actFetchCategory = (categories) => {
    return {
        type: Types.FETCH_CATEGORIES,
        categories
    }
}


export const actFetchPostsByCategoryRequest = (catId) => {
    return (dispatch) => {
        dispatch(actFetchPostsByCategory(posts, catId));
    }
}

export const actFetchPostsByCategory = (posts, catId) => {
    return {
        type: Types.FETCH_BY_CATEGORIES,
        posts,
        catId
    }
}


// SAMPLE

export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('/products', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data));
        });
    }
}

export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}

export const actAddProductRequest = (product) => {
    return (dispatch) => {
        return callApi('/products', 'POST', product).then(res => {
            dispatch(actAddProduct(res.data));
        });
    }
}

export const actAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}

export const actUpdateProductRequest = (product) => {
    return (dispatch) => {
        return callApi(`/products/${product.id}`, 'PUT', product).then(res => {
            if (res) {
                dispatch(actUpdateProduct(res.data));
            }
        });
    }
}

export const actUpdateProduct = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}

export const actDeleteProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`/products/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProduct(id));
        });
    }
}

export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}

export const actGetProductRequest = (id) => {
    return dispatch => {
        return callApi(`/products/${id}`, 'GET', null).then(res => {
            dispatch(actGetProduct(res.data))
        });
    }
}

export const actGetProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}

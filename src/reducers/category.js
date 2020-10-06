import * as Types from '../constants/ActionType';

var initialState = [];

const category = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_CATEGORIES:
            return action.categories;
        default: return [...state];
    }
};

export default category;
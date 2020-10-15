import * as Types from './../constants/ActionType';

var initialState = [];

const posts = (state = initialState, action) => {
    var { post, id } = action;
    switch (action.type) {
        case Types.FETCH_POSTS:
            return [...action.posts];
        case Types.GET_POST:
            var selected = null;
            action.posts.map((post) => {
                if(post.post_id == id) selected = post;
            });
            return selected;
        case Types.ADD_POSTS:
            state.push(post);
            return [...state];
        default: return [...state];
    }
};

export default posts;
import * as Types from './../constants/ActionType';
var initialState = {};

const postCategory = (state = initialState, action) => {
    switch(action.type){
        case Types.FETCH_BY_CATEGORIES:
            var categoryId = action.catId;
            var lstPost = [];
            action.posts.map((post)=>{
                if(post.catId === categoryId){
                    lstPost.push(post);
                }
            })
            return lstPost;
        default :
            return state;
    }
}

export default postCategory;
import * as Types from './../constants/ActionType';
var initialState = {};

const postCategory = (state = initialState, action) => {
    switch(action.type){
        case Types.FETCH_BY_CATEGORIES:
            var lstPost = [];
            console.log(action.posts);
            console.log(action.catId);
            action.posts.map((post)=>{
                if(post.category_id == action.catId){
                    lstPost.push(post);
                }
            });
            console.log(lstPost);
            return lstPost;
        default :
            return state;
    }
}

export default postCategory;
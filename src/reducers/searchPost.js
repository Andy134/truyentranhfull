import * as Types from '../constants/ActionType';

var initialState = [];

const searchPost = (state = initialState, action) => {
    switch (action.type) {
        case Types.SEARCH_POST:
            var lstResult = [];
            action.posts.map((post)=>{
                if(post.title.toLowerCase().includes(action.key.toLowerCase()) 
                || post.desc.toLowerCase().includes(action.key.toLowerCase())){
                    lstResult.push(post);
                }
            })
            return lstResult;
        default: return [...state];
    }
};

export default searchPost;
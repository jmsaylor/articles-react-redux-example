import {ADD_ARTICLE} from "../constants/action-types";

const initialState = {
    articles: []
};

function rootReducer(state = initialState, action){
    if (action.type == ADD_ARTICLE) {
        const newArticle = {
            title: action.payload.title,
            id: state.articles.length + 1
        }
        return Object.assign({}, state, {
            articles: state.articles.concat(newArticle)
        })
    }
    return state;
}

export default rootReducer;
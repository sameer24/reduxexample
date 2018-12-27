import { FETCH_POSTS, NEW_POST, SEARCH_POSTID, FETCH_GRID } from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            console.log(action);
            return {
                ...state,
                items: action.payload
            }
        case NEW_POST:
            console.log(action);
            return {
                ...state,
                item: action.payload
            }
        case SEARCH_POSTID:
            console.log(action);
            return {
                ...state,
                items: action.payload
            }
        case FETCH_GRID:
            console.log(action);
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}
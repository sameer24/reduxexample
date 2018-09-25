import { FETCH_POSTS, NEW_POST, SEARCH_POSTID } from './types'
import axios from 'axios'

export const fetchPosts = () => dispatch => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => {
            const posts = res.data;
           // console.log(posts);
            dispatch({
                type: FETCH_POSTS,
                payload: posts
            });
        })
}

export const createPosts = (postData) => dispatch => {
    axios.post(`https://jsonplaceholder.typicode.com/posts`, (postData))
        .then(function (response) {
            console.log('createPosts -> AAAA');
            dispatch({
                type: NEW_POST,
                payload: response
            });
        })
        .catch(function (error) {
            console.log(error);
        });
}


export const searchText = (searchText) => dispatch => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`, searchText)
        .then(function (response) {
            console.log('searchText -> AAAA'+response);
            const posts = response.data;
            dispatch({
                type: FETCH_POSTS,
                payload: posts
            });
        })
        .catch(function (error) {
            console.log(error);
        });
}
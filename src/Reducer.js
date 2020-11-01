import { SET_DATA, SET_TOTAL_ITEMS, SET_CURRENT_BOOK, SET_MAX_RESULT } from './Actions'

const initialState = {
    baseUrl: 'https://www.googleapis.com/books/v1/volumes?q',
    api: "AIzaSyBSgvdpNgfB_F992Tvobm3djh9Ie082AIM",
    data: [],
    currentBook: null,
    totalItems: 0,
    startIndex: 0,
    maxResults: 10
}

export function Reducer(state = initialState, action) {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: action.payload
            }
        case SET_CURRENT_BOOK:
            return {
                ...state,
                data: action.payload
            }
        case SET_TOTAL_ITEMS:
            return {
                ...state,
                totalItems: action.payload
            }
        case SET_MAX_RESULT:
            return {
                ...state,
                maxResults: action.payload
            }
        default:
            return state;
    }
}
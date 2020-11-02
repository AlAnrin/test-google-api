import { SET_DATA, SET_TOTAL_ITEMS, SET_CURRENT_BOOK, SET_MAX_RESULT, SET_START_INDEX, SET_FILTER_VALUE, SET_PLACE_FIND } from './Actions'

const initialState = {
    baseUrl: 'https://www.googleapis.com/books/v1/volumes?q',
    api: "AIzaSyBSgvdpNgfB_F992Tvobm3djh9Ie082AIM",
    filterValue: '',
    data: [],
    currentBook: null,
    totalItems: 0,
    startIndex: 0,
    maxResults: 10,
    placeFind: 0
}

export function Reducer(state = initialState, action) {
    switch (action.type) {
        case SET_PLACE_FIND:
            return {
                ...state,
                placeFind: action.payload
            }
        case SET_FILTER_VALUE:
            return {
                ...state,
                filterValue: action.payload
            }
        case SET_DATA:
            return {
                ...state,
                data: action.payload
            }
        case SET_CURRENT_BOOK:
            return {
                ...state,
                currentBook: action.payload
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
        case SET_START_INDEX:
            return {
                ...state,
                startIndex: action.payload
            }
        default:
            return state;
    }
}
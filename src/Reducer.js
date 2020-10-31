import { SET_DATA, SET_TOTAL_ITEMS } from './Actions'

const initialState = {
    baseUrl: 'https://www.googleapis.com/books/v1/volumes?q',
    api: "AIzaSyBSgvdpNgfB_F992Tvobm3djh9Ie082AIM",
    data: [],
    totalItems: 0
}

export function Reducer(state = initialState, action) {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: action.payload
            }
        case SET_TOTAL_ITEMS:
            return {
                ...state,
                totalItems: action.payload
            }
        default:
            return state;
    }
}
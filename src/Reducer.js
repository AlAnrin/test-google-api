import { SET_DATA } from './Actions'

const initialState = {
    baseUrl: 'https://www.googleapis.com/books/v1/volumes?q',
    api: "AIzaSyBSgvdpNgfB_F992Tvobm3djh9Ie082AIM",
    data: []
}

export function Reducer(state = initialState, action) {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}
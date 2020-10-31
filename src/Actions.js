export const SET_DATA = 'SET_DATA';
export const SET_TOTAL_ITEMS = 'SET_TOTAL_ITEMS';

export function setData(data) {
    return {
        type: SET_DATA,
        payload: data
    }
}

export function setTotalItems(totalItems) {
    return {
        type: SET_TOTAL_ITEMS,
        payload: totalItems
    }
}
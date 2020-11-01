export const SET_DATA = 'SET_DATA';
export const SET_TOTAL_ITEMS = 'SET_TOTAL_ITEMS';
export const SET_CURRENT_BOOK = 'SET_CURRENT_BOOK';

export function setData(data) {
    return {
        type: SET_DATA,
        payload: data
    }
}

export function setCurrentBook(currentBook) {
    return {
        type: SET_CURRENT_BOOK,
        payload: currentBook
    }
}

export function setTotalItems(totalItems) {
    return {
        type: SET_TOTAL_ITEMS,
        payload: totalItems
    }
}
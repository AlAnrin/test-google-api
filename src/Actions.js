export const SET_DATA = 'SET_DATA';
export const SET_TOTAL_ITEMS = 'SET_TOTAL_ITEMS';
export const SET_CURRENT_BOOK = 'SET_CURRENT_BOOK';
export const SET_MAX_RESULT = 'SET_MAX_RESULT';

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

export function setMaxResult(maxResult) {
    return {
        type: SET_MAX_RESULT,
        payload: maxResult
    }
}

export function setTotalItems(totalItems) {
    return {
        type: SET_TOTAL_ITEMS,
        payload: totalItems
    }
}
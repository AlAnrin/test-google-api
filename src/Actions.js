export const SET_DATA = 'SET_DATA';
export const SET_TOTAL_ITEMS = 'SET_TOTAL_ITEMS';
export const SET_CURRENT_BOOK = 'SET_CURRENT_BOOK';
export const SET_START_INDEX = 'SET_START_INDEX';
export const SET_MAX_RESULT = 'SET_MAX_RESULT';
export const SET_FILTER_VALUE = 'SET_FILTER_VALUE';
export const SET_PLACE_FIND = 'SET_PLACE_FIND';

export function setFilterValue(filterValue) {
    return {
        type: SET_FILTER_VALUE,
        payload: filterValue
    }
}

export function setPlaceFind(placeFind) {
    return {
        type: SET_PLACE_FIND,
        payload: placeFind
    }
}

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

export function setStartIndex(startIndex) {
    return {
        type: SET_START_INDEX,
        payload: startIndex
    }
}

export function setTotalItems(totalItems) {
    return {
        type: SET_TOTAL_ITEMS,
        payload: totalItems
    }
}
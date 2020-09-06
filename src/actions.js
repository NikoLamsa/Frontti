// actions

export const ITEM_SELECTED = 'ITEM_SELECTED';
export const SET_NAME_FILTER = 'SET_NAME_FILTER';
export const SET_ID_FILTER = 'SET_ID_FILTER';
export const RESET_FILTER = 'RESET_FILTER';

export const SELECTED_ITEM_DATA = 'SELECTED_ITEM_DATA';

export const DO_API_UPDATE = 'DO_API_UPDATE';
export const API_UPDATE_DONE = 'API_UPDATE_DONE';

export const ApiState = {
    CHANGED: 'CHANGED',
    COMPLETED: 'COMPLETED'
}

export const FilterState = {
    NO_FILTER: 'NO_FILTER',
    NAME_FILTER: 'NAME_FILTER',
    ID_FILTER: 'ID_FILTER'
}

// creators
export function setFilterByTitle(filterText) {
    return {
        type: SET_NAME_FILTER,
        filterText
    }
}
export function setFilterById(filterIdNumber) {
    return {
        type: SET_ID_FILTER,
        filterIdNumber
    }
}
export function resetFilter() {
    return {type: RESET_FILTER}
}

export function itemSelected(id, title, body) {

    return {
        type: ITEM_SELECTED,
        id,
        title,
        body
    }
}
export function getSelectedItem(id) {
    return {
        type: SELECTED_ITEM_DATA,
        id
    }
}

export function doApiUpdate() {
    return { type: DO_API_UPDATE }
}

export function apiUpdateDone() {
   return { type: API_UPDATE_DONE } 
}


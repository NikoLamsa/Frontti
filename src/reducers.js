import { SET_NAME_FILTER, SET_ID_FILTER, FilterState, ITEM_SELECTED, SELECTED_ITEM_DATA, RESET_FILTER} from './actions';
import { DO_API_UPDATE, API_UPDATE_DONE, ApiState} from './actions';
import { combineReducers } from 'redux';


function itemSelected(state = 0, action) {

    switch (action.type) {
        case ITEM_SELECTED: return Object.assign({}, state, {
            selectedId: action.id,
            selectedTitle: action.title,
            selectedBody: action.body} )
        case SELECTED_ITEM_DATA: return {selectedId : state, selectedTitle : state, selectedBody: state}
        default: return state
    }
}

function setGetFilter(state = FilterState.NO_FILTER, action) {

    switch(action.type) {
        case SET_NAME_FILTER: return Object.assign({}, state, {filterText: action.filterText, currentFilter: FilterState.NAME_FILTER})
        case SET_ID_FILTER: return Object.assign({}, state, {FilterId: action.filterIdNumber, currentFilter: FilterState.ID_FILTER})
        case RESET_FILTER: return Object.assign({}, state, {currentFilter: FilterState.NO_FILTER, FilterId: '', filterText: ''})
        default: return state
    }
}

function handleApiState(state = ApiState.CHANGED, action) {
    switch(action.type) {
        case DO_API_UPDATE: return Object.assign({}, state, {apiState: ApiState.CHANGED})
        case API_UPDATE_DONE: return Object.assign({}, state, {apiState: ApiState.COMPLETED})
        default: return state
    }
}

const allReducers = combineReducers({
    itemSelected, setGetFilter, handleApiState
})

export default allReducers;


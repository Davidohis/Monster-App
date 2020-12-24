import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FALIED } from './constants'

// Reducer for the action searching robots
const intialStateSearch = {
    searchField: ''
}

export const searchRobots = (state=intialStateSearch, action={}) => {
    switch(action.type) {
       case CHANGE_SEARCH_FIELD:
         return Object.assign({}, state, {searchField: action.payload});
       default:
         return state;
    }
}

// Reducer for the action fetch robots data 
const intialStateRobots = {
    isPendding: false,
    robots: [],
    error: ''
}

export const requestRobots = (state=intialStateRobots, action={}) => {
    switch(action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPendding: true })
        case REQUEST_ROBOTS_SUCCESS: 
            return Object.assign({}, state, { robots: action.payload, isPendding: false })
        case REQUEST_ROBOTS_FALIED:
            return Object.assign({}, state, { error: action.playload, isPendding: false })
        default:
            return state
    }
}
import uuid from 'uuid'
import {
    GET_ITEMS,
    ADD_ITEMS,
    DELETE_ITEMS,
    ITEMS_LOADING
} from '../actions/types'

const  initalState = {
    items: [],
    loading: false
}

export default function(state = initalState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false
            }
        case DELETE_ITEMS:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }    
        case ADD_ITEMS:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }    
        default:
            return state
    }
}
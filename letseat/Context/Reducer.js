import * as actionTypes from './ActionTypes';

export const DishesRed = (state = {loading: true, errMsg: null, dishes: []}, action) =>{
    switch (action.type){
        case actionTypes.ADD_DISHES:
            return {...state, loading: false, errMsg: null, dishes: action.payload}

        case actionTypes.DISHES_LOADING:
            return {...state, loading: true, errMsg: null, dishes: []}

        case actionTypes.DISHES_FAILED:
            return {...state, loading: false, errMsg: action.payload, dishes: []}  

        default: return state;
    }
};

export const StaffRed = (state = {loading: true, errMsg: null, staff: []}, action) =>{
    switch (action.type){
        case actionTypes.ADD_STAFF:
            return {...state, loading: false, errMsg: null, staff: action.payload}

        case actionTypes.STAFF_LOADING:
            return {...state, loading: true, errMsg: null, staff: []}

        case actionTypes.STAFF_FAILED:
            return {...state, loading: false, errMsg: action.payload, staff: []}  

        default: return state;
    }
};
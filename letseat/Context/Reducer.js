import * as actionTypes from './ActionTypes';

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ DISHES $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
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

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ STAFF $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
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

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ COMMENTS $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
export const CommentsRed = (state = {loading: true, errMsg: null, comments: []}, action) =>{
    switch (action.type){
        case actionTypes.ADD_COMMENTS:
            return {...state, loading: false, errMsg: null, comments: action.payload}

        case actionTypes.COMMENTS_LOADING:
            return {...state, loading: true, errMsg: null, comments: []}

        case actionTypes.COMMENTS_FAILED:
            return {...state, loading: false, errMsg: action.payload, comments: []}  

        default: return state;
    }
};
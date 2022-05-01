import { url } from "../BaseUrl";
import * as actionTypes from './ActionTypes';
import axios from 'axios';

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ DISHES $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
export function fetchDishes(dispatch) {
    dispatch(dishesLoading());

    axios.get(`${url}/dishes`)
        .then((res) => {
            dispatch(addDishes(res.data));
        })
        .catch((err) => {
            dispatch(dishesFailed(err.message));
            console.log(err.message);
        })
}

const addDishes = (dishes) => ({
    type: actionTypes.ADD_DISHES,
    payload: dishes
});

const dishesLoading = () => ({
    type: actionTypes.DISHES_LOADING
});

const dishesFailed = (errMsg) => ({
    type: actionTypes.DISHES_FAILED,
    payload: errMsg
});


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ STAFF $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
export function fetchStaff(dispatch) {
    dispatch(staffLoading());

    axios.get(`${url}/staff`)
        .then((res) => {
            dispatch(addStaff(res.data));
        })
        .catch((err) => {
            dispatch(staffFailed(err.message));
            console.log(err.message);
        })
}

const addStaff = (staff) => ({
    type: actionTypes.ADD_STAFF,
    payload: staff
});

const staffLoading = () => ({
    type: actionTypes.STAFF_LOADING
});

const staffFailed = (errMsg) => ({
    type: actionTypes.STAFF_FAILED,
    payload: errMsg
});
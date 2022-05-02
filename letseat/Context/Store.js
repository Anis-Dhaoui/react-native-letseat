import React, { useReducer } from "react";
import { CommentsRed, DishesRed, StaffRed } from "./Reducer";


const combineReducers = (slices) => (state, action) =>
    Object.keys(slices).reduce(
        (acc, prop) => (
            {...acc, [prop]: slices[prop](acc[prop], action)}
        ),
        state
    );

const rootReducer = combineReducers({
    dishes: DishesRed,
    staff: StaffRed,
    comments: CommentsRed
});

const Store = React.createContext();

const StoreProvider = (props) => {
    const [state, dispatch] = useReducer(rootReducer, {});
    const store = React.useMemo(() => [state, dispatch], [state]);
    return (
        <Store.Provider value={store}>
            {props.children}
        </Store.Provider>
    );
};

function useStore() {
    const context = React.useContext(Store);
    if (context === undefined) {
        throw new Error('useStore must be used within a StoreProvider')
    }
    return context
}

export { StoreProvider, useStore };
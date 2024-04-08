import { cartReducer } from "./reducers/CartReducer";
import { combineReducers } from "redux";
import { itemDetailsReducer } from './reducers/ItemDetailsReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    itemDetails: itemDetailsReducer,
});

export default rootReducer;
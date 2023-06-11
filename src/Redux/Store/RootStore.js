import { legacy_createStore as createStore, applyMiddleware } from "redux";
import RootReducer from "../Reducers/RootReducer";
import thunk from "redux-thunk";

const RootStore = createStore(RootReducer, applyMiddleware(thunk));

export default RootStore;
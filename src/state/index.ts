import { createStore, applyMiddleware } from "redux";
import allReducers from "./reducers";

const createStoreWithMdware = applyMiddleware()(createStore);

let store = createStoreWithMdware(allReducers);

export default store;

import { createStore } from "redux";
import reducer from "../reducers";

const store = createStore(reducer);

// * listens for changes
store.subscribe(() => console.log(store));

export default store;

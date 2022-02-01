import { productreducer } from "./Reducer";
import { createStore } from "redux";

const store = createStore(
  productreducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

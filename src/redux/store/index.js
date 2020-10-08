import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
// const store: Store<ArticleState, ArticleAction> & {
//   dispatch: DispatchType
// } = createStore(rootReducer, applyMiddleware(thunk))

export default store;

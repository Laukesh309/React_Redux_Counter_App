import { combineReducers } from "redux";
// import { createStore } from "redux";// createStore is deprecated Now use configureStore from reduxjs/toolkit is used today
import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../Reducer/counterReducer";


// configureStore.ts:164 Uncaught Error: "reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers
//     at configureStore (configureStore.ts:164:1)
//     at ./src/Store/index.js (index.js:11:1)
//     at options.factory (react refresh:6:1)
//     at __webpack_require__ (bootstrap:24:1)
//     at fn (hot module replacement:62:1)
//     at ./src/index.js (index.js:15:1)
//     at options.factory (react refresh:6:1)
//     at __webpack_require__ (bootstrap:24:1)
//     at startup:7:1
//     at startup:7:1

//solution Note: reducer key  is the   mandatory of configureStore
///https://redux-toolkit.js.org/api/configureStore
const allReducer = combineReducers({
  counter: CounterReducer
})

let store = configureStore({
  reducer: allReducer,
})

export default store



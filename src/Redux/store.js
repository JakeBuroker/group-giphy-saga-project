// import { createStoreHook } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { takeLatest, put } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import axios from "axios";

//reducer "input" if SET_INPUT is reveived set that input as the state
const input = (state = {}, action) => {
  if (action.type === "SET_INPUT") {
    console.log('in input reducer', action.payload);
    return action.payload
  }
  //else default
  return state;
};

// rootsaga runs all generator functions
function* rootSaga() {
  yield takeLatest("FETCH_GIFS", fetchGifs);
  yield takeLatest("POST_FAVORITE", postFavorite)
}

// creates fetchGifsyield axios.get("/api/gif", action.payload);
function* fetchGifs(action) {
  console.log(action.payload);
  try {
    const gifResponse = yield axios({
      method: "POST",
      url: "/api/gif",
      data: {ourInput: action.payload}
    })
    yield put({ type: "SET_INPUT", payload: gifResponse.data });
  } catch (error) {
    console.log(error);
  }
}

function * postFavorite(action) {
  try {
    yield axios.post('/api/favorites', action.payload)
  } catch (error) {
    console.log(error);
  }
} 

// initializing saga middleware
const sagaMiddleware = createSagaMiddleware();
// create a store
const store = createStore(
  combineReducers({ input }),
  applyMiddleware(sagaMiddleware, logger)
);

//run saga
sagaMiddleware.run(rootSaga);
export default store;

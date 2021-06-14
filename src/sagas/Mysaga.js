import { call, put, takeEvery } from 'redux-saga/effects'

// Worker saga will be fired on USER_FETCH_REQUESTED actions

const fetchText = (data) =>{
    return new Promise((resolve)=>{
        resolve(setTimeout(()=>{
            return Math.random()
        },1000))
    });
}
function* fetchUser(action) {
   try {
      const data = yield call(fetchText,'ABC');
      yield put({type: "UPDATE_INPUT_VALUE", value: data});
   } catch (e) {
      yield put({type: "UPDATE_INPUT", message: e.message});
   }
}

// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
function* mySaga() {
  yield takeEvery("GET_TEXT", fetchUser);
}

export default mySaga;
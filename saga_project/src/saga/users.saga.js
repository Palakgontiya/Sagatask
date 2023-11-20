import { put, takeLatest } from "redux-saga/effects";
import { getUsersFailed, getUsrersList } from "../redux/slice";

const getAPIrequest = async (url) => {
  try {
    const apiResponse = await fetch(url);
    const parsedApiResponse = await apiResponse.json();
    return parsedApiResponse;
  } catch (err) {
    return null;
  }
};

function* getUsers() {
  try {
    const apidata = yield getAPIrequest(
      "https://jsonplaceholder.typicode.com/users"
    );
    if (!apidata) {
      yield put(getUsersFailed());
      return;
    }
    yield put(getUsrersList({ results: apidata }));
  } catch (err) {
    yield put(getUsersFailed());
  }
}

export function* watchGetUsers() {
  yield takeLatest("MyuserList/getUsers", getUsers);
}

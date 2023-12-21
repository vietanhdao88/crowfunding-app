import { takeLatest } from "redux-saga/effects";
import handleAuthRegister from "./auth-handler";
import { authRegister } from "./auth-slice";
export default function* authSaga() {
  yield takeLatest(authRegister.type, handleAuthRegister);
}

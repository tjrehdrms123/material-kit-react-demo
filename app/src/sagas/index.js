import { all, fork } from "redux-saga/effects";

import member from "./member";

export default function* rootSaga() {
  yield all([
    fork(member), // 회원 정보 리스트
  ]);
}

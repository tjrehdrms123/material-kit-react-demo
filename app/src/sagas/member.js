import { all, fork, takeLatest, delay, put, call } from "redux-saga/effects";

import {
    // 회원 정보 리스트
    MEMBER_LISTS_FAILUER,
    MEMBER_LISTS_REQUEST,
    MEMBER_LISTS_SUCCESS
} from "../reducers/member";

import { memberAPI } from "../api/member";

// 회원 정보 리스트
function* memberLists(action){
    try {
        const res = yield call(memberAPI, action.query);
        yield put({
            type: MEMBER_LISTS_SUCCESS,
            data: res.data,
        });
    } catch (err) {
        yield put({
            type: MEMBER_LISTS_FAILUER,
            error: err.response,
        });
    }
}

function* watchMemberList() {
    yield takeLatest(MEMBER_LISTS_REQUEST, memberLists);
}

export default function* memberSaga() {
    yield all([
        fork(watchMemberList), // 회원 정보 리스트
    ]);
}
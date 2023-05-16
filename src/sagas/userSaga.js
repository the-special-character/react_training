import { all, fork, takeLatest, call, put } from 'redux-saga/effects'
import axiosInstance from '../utils/axiosInstance'

function* login({ payload, meta }) {
  try {
    const res = yield call(axiosInstance.post, 'login', payload)
    sessionStorage.setItem('user', JSON.stringify(res))
    yield put({ type: 'LOGIN_SUCCESS', payload: res, meta })
  } catch (error) {
    yield put({
      type: 'LOGIN_FAIL',
      payload: error,
      meta: { message: error.message, ...meta },
    })
  }
}

function* register({ payload, meta }) {
  try {
    const { confirmPassword, ...rest } = payload
    const res = yield call(axiosInstance.post, 'register', rest)
    sessionStorage.setItem('user', JSON.stringify(res))
    yield put({ type: 'REGISTER_SUCCESS', payload: res, meta })
  } catch (error) {
    yield put({
      type: 'REGISTER_FAIL',
      payload: error,
      meta: { message: error.message, ...meta },
    })
  }
}

function logout() {
  sessionStorage.clear()
}

function* loginRequest() {
  yield takeLatest('LOGIN_REQUEST', login)
}

function* registerRequest() {
  yield takeLatest('REGISTER_REQUEST', register)
}

function* logoutRequest() {
  yield takeLatest('logout', logout)
}

export default function* userSaga() {
  yield all([fork(loginRequest), fork(registerRequest), fork(logoutRequest)])
}

import { all, fork } from 'redux-saga/effects'
import userSaga from './userSaga'
import productsSaga from './productsSaga'
import cartSaga from './cartSaga'

export default function* rootSaga() {
  yield all([fork(userSaga), fork(productsSaga), fork(cartSaga)])
}

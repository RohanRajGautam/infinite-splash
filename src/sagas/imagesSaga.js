import { takeEvery, select, call, put } from 'redux-saga/effects';

import { fetchImages } from '../api';
import { setImages, setError } from '../actions';
import { IMAGES } from '../constants';

export const getPage = (state) => state.nextPage;

export function* handleImagesLoad() {
  try {
    // select effect allows you to grab a slice of a state
    const page = yield select(getPage);

    // call effect suspends the saga until the fetchImages succeed
    const images = yield call(fetchImages, page);

    // put is to dispatch an action
    yield put(setImages(images));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export default function* watchImagesLoad() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

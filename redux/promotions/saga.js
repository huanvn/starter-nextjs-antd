// Sample code

import {GET_ADS, GET_ADS_SUCCESS} from './actions'
//import Cookies from 'js-cookie'
import {call, put, takeLatest} from 'redux-saga/effects'

import graphql from '~/services/_graphql'

function* handleFetchData(action) {

  let {payload: {pageSize, current}} = action

  try {
    const response = yield call(graphql.query, `
      query ($limit: Int!, $offset: Int!, $ad_id: String!) {
        ads_aggregate(where: {ad_id: {_like: $ad_id}}) {
          aggregate {
            count
          }
        }
        ads(limit: $limit, offset: $offset, where: {ad_id: {_like: $ad_id}}) {
          ad_id
          campaign_id
          status
          start_date
          stop_date
        }
      }
      `, {limit: pageSize, offset: pageSize * (current - 1), ad_id: "%%"});

    // Dispatch action GET_ADS_SUCCESS, that will be handled in reducer.js
    yield put({
      type: GET_ADS_SUCCESS,
      response: response.data
    })
  } catch (e) {
    console.log(e)
  }
}

function* root() {
  yield takeLatest(GET_ADS, handleFetchData)
}

export default root

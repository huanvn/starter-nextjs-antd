import axios from 'axios'
import config from '../config'

let client = axios.create({
  baseURL: config.graphURL(),
  timeout: 30000,
  headers: {'x-hasura-admin-secret': '<secret_key>'} // TODO: Remove me!
});

export default {
  query: (graphql, variables = {}) => {
    return client.request({
      method: 'post',
      url: '/',
      data: {
        query: graphql,
        variables: variables
      }
    })
  }
}

import '../layouts/antd-custom.less'

import App from 'next/app'
import {Provider} from 'react-redux'
import React from 'react'
import withReduxStore from '../redux/withReduxStore'

import {appWithTranslation} from "../config/i18n";

class MyApp extends App {
  constructor(props) {
    super(props)
  }

  render() {
    const {Component, pageProps, reduxStore} = this.props
    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default appWithTranslation(withReduxStore(MyApp))

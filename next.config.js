/* eslint-disable */


const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')

const fs = require('fs')
const path = require('path')


module.exports = () => {

  // fix: prevents error when .less files are required by node
  if (typeof require !== 'undefined') {
    require.extensions['.less'] = file => {
    }
  }

  const antdModfiedVars = lessToJS(
    fs.readFileSync(path.resolve(__dirname, './layouts/antd-custom.less'), 'utf8')
  )

  return withLess({
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: antdModfiedVars,
    },
    webpack: (config, {buildId, dev, isServer}) => {
      console.log(`Webpack: BUILD_ID=${buildId}, dev=${dev}, isServer=${isServer}`)

      // Ignore the mini-css-extract-plugin warning. This is a workaround to fix css issue in antd
      // TODO: Fix me!
      config.plugins.push(
        new FilterWarningsPlugin({
          exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
        })
      );

      if (isServer) {
        const antStyles = /antd\/.*?\/style.*?/
        const origExternals = [...config.externals]
        config.externals = [
          (context, request, callback) => {
            if (request.match(antStyles)) return callback()
            if (typeof origExternals[0] === 'function') {
              origExternals[0](context, request, callback)
            } else {
              callback()
            }
          },
          ...(typeof origExternals[0] === 'function' ? [] : origExternals),
        ]

        config.module.rules.unshift({
          test: antStyles,
          use: 'null-loader',
        })
      }

      return config
    },

  })
}

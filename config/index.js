// Use es5 here
import constants from "./contants";
import pkg from '../package'

const env = (process.browser ? window.ENV : process.env.ENV) || constants.ENV_DEV;

module.exports = {
  version: pkg.version,
  env: env,
  isDevEnv: () => env === constants.ENV_DEV,
  isServer: () => typeof window === 'undefined',
  graphURL: () => {
    // Default dev env
    return "http://localhost:3002"
  },
  restURL: () => {
    // Default dev env
    return "http://localhost:3001"
  }
}

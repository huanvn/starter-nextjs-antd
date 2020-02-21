export const SHOW_LOGIN = 'layouts/SHOW_LOGIN'
export const SHOW_HOME = 'layouts/SHOW_HOME'
export const SHOW_ERRORS = 'layouts/SHOW_ERRORS'

export const showErrors = (errors) => {

  return {
    type: SHOW_ERRORS,
    errors
  }
}

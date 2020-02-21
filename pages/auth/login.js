import LoginPage from '../../views/auth/login'
import React from 'react'
import {connect} from "react-redux";

const mapStateToProps = ({auth, layouts}) => ({auth, layouts});

const Page = (props) => {
  return (
    <LoginPage {...props} />
  )
}

export default connect(mapStateToProps)(Page)

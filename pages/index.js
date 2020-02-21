import * as PropTypes from "prop-types";

import {Layout} from "antd";
import MainLayout from '../layouts/MainLayout'
import React from 'react'
import {connect} from 'react-redux'
import {withTranslation} from "../config/i18n";

const HomePage = (props) => {
  return (
    <MainLayout>
      <Layout style={{padding: 20}}>{props.t("hello")}</Layout>
    </MainLayout>
  );
}

HomePage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

HomePage.propTypes = {
  t: PropTypes.func.isRequired
}

const mapStateToProps = ({home}) => ({home});

export default connect(mapStateToProps)(withTranslation('common')(HomePage))
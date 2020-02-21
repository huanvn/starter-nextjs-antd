import * as PropTypes from "prop-types";

import {Layout} from "antd";
import MainLayout from '../../layouts/MainLayout'
import React from 'react'
import {connect} from 'react-redux'
import {withTranslation} from "../../config/i18n";

const Page1 = (props) => {
  return (
    <MainLayout>
      <Layout style={{padding: 20}}>{props.t("hello")} page1</Layout>
    </MainLayout>
  );
}

Page1.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

Page1.propTypes = {
  t: PropTypes.func.isRequired
}

const mapStateToProps = ({page1}) => ({page1});

export default connect(mapStateToProps)(withTranslation('common')(Page1))

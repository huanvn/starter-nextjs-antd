import * as PropTypes from "prop-types";

import {Layout} from "antd";
import MainLayout from '../../layouts/MainLayout'
import React from 'react'
import {connect} from 'react-redux'
import {withTranslation} from "../../config/i18n";

const Page2 = (props) => {
  return (
    <MainLayout>
      <Layout style={{padding: 20}}>{props.t("hello")} page2</Layout>
    </MainLayout>
  );
}

Page2.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

Page2.propTypes = {
  t: PropTypes.func.isRequired
}

const mapStateToProps = ({page2}) => ({page2});

export default connect(mapStateToProps)(withTranslation('common')(Page2))

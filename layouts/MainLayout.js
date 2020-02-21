import './antd-custom.less'

import {Icon, Layout, Menu} from 'antd';
import React, {useEffect} from 'react'
import {i18n, withTranslation} from "../config/i18n";

import Errors from './_components/Errors'
import LayoutFooter from './footer'
import {connect} from "react-redux";
import {useRouter} from 'next/router'

const {Header, Content, Sider} = Layout;
const { SubMenu } = Menu;

const MainLayout = (props) => {

  const router = useRouter()

  const onChangeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <Layout style={{minHeight: '100vh', maxWidth: '100vw',backgroundColor:'#fff',}}>
      <Header
        style={{
          height: '65px',
          width: '100%',
          position: 'fixed',
          zIndex: 1,
        }}
      >
        <div className="logo">
          <a href="/">
            <img src={`/img/logo.png`} style={{width: 100, paddingTop: 3, margin: '1% 1% 1% -2%', float:'left'}} alt="Home"/>
          </a>
        </div>
        <Menu mode="horizontal" defaultSelectedKeys={['4']}
         style={{ lineHeight: '65px', backgroundColor:'transparent', color:'#fff' }}
        >
          <Menu.Item key="page1" onClick={() => router.push("/page1")} className="mainMenu">{props.t("page1")}</Menu.Item>
          <Menu.Item key="page2" onClick={() => router.push("/page2")} className="mainMenu">{props.t("page2")}</Menu.Item>
          <SubMenu
            title={
              <span >
                <Icon type="global" />
                {props.t("lgSetting")}
              </span>}
            style={{
            float:'right',
          }}
          >
            <Menu.Item type={'link'} onClick={ () => onChangeLanguage("ja")}>日本語</Menu.Item>
            <Menu.Item type={'link'} onClick={() => onChangeLanguage("en")}>English</Menu.Item>
          </SubMenu>
        </Menu>
      </Header>
      <Content style={{
        margin: '0 25px 0',
        overflow: 'initial',
        marginTop: 70,
        }}>
          <Errors errors={props.layout.errors} />
          {props.children}
        </Content>
        <LayoutFooter/>
    </Layout>
  )
}

MainLayout.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

const mapStateToProps = ({auth, layout}) => ({
  layout,
  auth
});

export default connect(mapStateToProps)(withTranslation(["common"])(MainLayout))

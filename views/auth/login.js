import './login.less'

import {Avatar, Button, Form, Icon, Input, Layout} from 'antd';
import React, {useEffect} from 'react'
import {useRouter} from 'next/router'

import actions from "../../redux/auth/actions";

const NormalLoginForm = (props) => {

  const router = useRouter()

  useEffect(() => {
    if (props.auth.authenticated) {
      router.push("/")
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    props.form.validateFields((err, values) => {
      if (!err) {
        const {username, password} = values
        props.dispatch(actions.doLogin(username, password))
      } else {
        console.log(err)
        // Error
      }
    });
  };

  const {getFieldDecorator} = props.form;
  return (
    <Layout className="login-container">
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item style={{textAlign: 'center'}}>
          <Avatar size={128} style={{background: '#FFFFFF'}}>
            <img alt="" src="/static/img/logo.png" style={{width: 110}}/>
          </Avatar>
        </Form.Item>


        <Form.Item style={{marginTop: 40}}>
          {getFieldDecorator('username', {
            rules: [{required: true, message: 'Please input your Catalina network account'}],
          })(
            <Input
              prefix={<Icon type="user" style={{color: 'rgba(0,0,0)'}}/>}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{required: true, message: 'Please input your Password!'}],
          })(
            <Input
              prefix={<Icon type="lock" style={{color: 'rgba(0,0,0)'}}/>}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Login
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
}

export default Form.create({name: 'normal_login'})(NormalLoginForm);

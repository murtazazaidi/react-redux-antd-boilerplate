import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox, Layout } from 'antd';

import { APP_VERSION } from 'configs/constants';
import 'components/Login.css';

const { Content } = Layout;
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  componentDidMount() {
    this.checkPermissions(this.props.user);
  }

  componentWillReceiveProps(nextProps) {
    this.checkPermissions(nextProps.user);
  }

  checkPermissions = (user) => {
    if (user && this.props.history.location.pathname !== '/') {
      this.props.history.push('/');
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login('admin', 'admin');
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Layout>
        <Content style={{ margin: '22vh auto' }}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>Remember me</Checkbox>
              )}
              <a className="login-form-forgot" href="">Forgot password</a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Login
              </Button>
              Or <Link to="/signup">register now!</Link>
            </FormItem>
          </Form>
        </Content>
        <div className="login-footer">
          All Rights Reserved © {new Date().getFullYear() } Murtaza Zaidi.
            <span>{APP_VERSION}</span>
        </div>
      </Layout>
    );
  }
}

const Login = Form.create()(NormalLoginForm);

export default Login;

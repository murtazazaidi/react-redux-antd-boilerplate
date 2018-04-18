import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout, Icon, Row, Col } from 'antd';

import LogoutContainer from 'containers/LogoutContainer';
import EmployeeContainer from 'containers/EmployeeContainer';

import AppMenu from 'components/AppMenu';
import AdminRoutes from 'components/AdminRoutes';
import UserDetails from 'components/UserDetails';

import { APP_VERSION } from 'configs/constants';

import './App.css';

const {
  Header, Content, Footer, Sider,
} = Layout;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  componentDidMount() {
    this.checkPermissions(this.props.user);
  }

  componentWillReceiveProps(nextProps) {
    this.checkPermissions(nextProps.user);
  }

  checkPermissions = (user) => {
    if (!user && this.props.history.location.pathname !== '/login') {
      this.props.history.push('/login');
    }
  }

  toggle = () => {
    this.setState({ collapsed: !this.state.collapsed });
  }

  render() {
    const { match, user } = this.props;
    const { collapsed } = this.state;
    const isAdmin = user && user.isAdmin;

    return (
      <Layout className="app-layout">
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <div className={`logo ${!collapsed && 'expanded'}`} />
          <AppMenu isAdmin={isAdmin} history={this.props.history} />
        </Sider>
        <Layout>
          <Header className="app-header">
            <Row>
              <Col span={1}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                  style={{ padding: 10, cursor: 'pointer' }}
                />
              </Col>
              <Col span={7} offset={15}>
                <UserDetails history={this.props.history} />
              </Col>
            </Row>
          </Header>
          <Content className="app-content">
            <Switch>
              <Route
                exact
                path={match.path}
                component={EmployeeContainer}
              />
              <Route
                path={`${match.path}admin`}
                render={props => (
                  <AdminRoutes {...props} isAdmin={isAdmin} />)}
              />
              <Route
                path={`${match.path}logout`}
                component={LogoutContainer}
              />
              <Route path="*" render={() => (<Redirect to="/" />)} />
            </Switch>
          </Content>
          <Footer className="app-footer">
            All Rights Reserved © { new Date().getFullYear() } Murtaza Zaidi.
            <span>{APP_VERSION}</span>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;

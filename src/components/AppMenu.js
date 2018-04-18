import React from 'react';
import { Menu, Icon } from 'antd';

const DEFAULT_SELECTION = 'employee';

class AppMenu extends React.Component {
  constructor(props) {
    super(props);
    const { pathname } = props.history.location;
    let route = DEFAULT_SELECTION;
    if (pathname !== '/') {
      const pathArray = pathname.split('/');
      route = pathArray[pathArray.length - 1];
    }
    this.state = {
      selectedKey: route,
    };
  }
  onSelect = ({ key }) => {
    this.setState({ selectedKey: key });
    switch (key) {
      case 'employee': {
        this.props.history.push('/');
        break;
      }
      case 'report': {
        this.props.history.push('/admin/report');
        break;
      }
      case 'setting': {
        this.props.history.push('/admin/setting');
        break;
      }
      default:
    }
  };

  render() {
    const { isAdmin } = this.props;
    const { selectedKey } = this.state;

    return (
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[DEFAULT_SELECTION]}
        selectedKeys={[selectedKey]}
        onSelect={this.onSelect}
      >
        <Menu.Item key="employee">
          <Icon type="team" />
          <span>Employees</span>
        </Menu.Item>
        { isAdmin ? (<Menu.Item key="report">
          <Icon type="pie-chart" />
          <span>Report</span>
        </Menu.Item>) : '' }
        { isAdmin ? (<Menu.Item key="setting">
          <Icon type="setting" />
          <span>Settings</span>
        </Menu.Item>) : '' }
      </Menu>);
  }
}

export default AppMenu;

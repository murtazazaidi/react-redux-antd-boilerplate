import React from 'react';
import { connect } from 'react-redux';
import { Avatar, Icon, Dropdown, Menu } from 'antd';
import DefaultUserImage from 'images/user-default.png';

class UserDetails extends React.Component {
  onClick = ({ key }) => {
    if (key === 'logout') {
      this.props.history.push(`/${key}`);
    }
  }

  render() {
    const { user, userImage, collapsed } = this.props;
    const menu = (
      <Menu onClick={this.onClick}>
        <Menu.Item key="logout">
          <Icon type="logout" />
          <span style={{ paddingLeft: 20 }}>Logout</span>
        </Menu.Item>
      </Menu>
    );

    return (
      <div className={collapsed ? 'user-fold' : 'user-unfold'}>
        <Avatar
          className="profile-img"
          src={userImage || DefaultUserImage}
        />
        <span>
          <Dropdown overlay={menu}>
            <div className="ant-dropdown-link" style={{ paddingLeft: 10 }}>
              {user.name} <Icon type="down" />
            </div>
          </Dropdown>
        </span>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    user: auth.user,
    userImage: auth.user && auth.userImage,
  };
}

export default connect(mapStateToProps)(UserDetails);

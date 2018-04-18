import React from 'react';
import { Switch, Route } from 'react-router-dom';

const ReportContainer = () => (
  <div>
    <h1>Report Page</h1>
    <div>This is Report Page content</div>
  </div>);

const SettingContainer = () => (
  <div>
    <h1>Settings Page</h1>
    <div>This is Settings Page content</div>
  </div>);

class AdminRoutes extends React.Component {
  componentDidMount() {
    this.checkPermissions(this.props.isAdmin);
  }

  componentWillReceiveProps(nextProps) {
    this.checkPermissions(nextProps.isAdmin);
  }

  checkPermissions = (isAdmin) => {
    if (!isAdmin && this.props.history.location.pathname !== '/') {
      this.props.history.push('/');
    }
  }

  render() {
    const { match } = this.props;
    return (
      <Switch>
        <Route
          path={`${match.path}/report`}
          component={ReportContainer}
        />
        <Route
          path={`${match.path}/setting`}
          component={SettingContainer}
        />
      </Switch>);
  }
}

export default AdminRoutes;

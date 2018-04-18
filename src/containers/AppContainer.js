import { connect } from 'react-redux';
import App from 'components/App';

function mapStateToProps(state) {
  return {
    user: state.auth.user,
  };
}
const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;

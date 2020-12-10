import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as action from '../Login/actions';

const mapStateToProps = (state) => {
  return {
    token: state.loginReducer.token,
    loading: state.loginReducer.loading,
    error: state.loginReducer.error,
  };
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.usernameRef = React.createRef();
    this.passwordRef = React.createRef();
  }
  login = () =>
    this.props.getLoginToken(
      this.usernameRef.current.value,
      this.passwordRef.current.value
    );
  componentDidUpdate() {
    if (this.props.token)
      this.props.history.push({
        pathname: '/booking',
      });
  }
  render() {
    return (
      <div>
        <div>
          <label for='username'>USERNAME: </label>
          <input type='text' id='username' ref={this.usernameRef} />
        </div>
        <div>
          <label for='password'>PASSWORD: </label>
          <input type='password' id='password' ref={this.passwordRef} />
        </div>
        <button type='button' onClick={this.login}>
          Login
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, action)(withRouter(Login));

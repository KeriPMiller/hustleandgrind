import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import PropTypes from "prop-types";
import { Login, UserHome, ProfileConsole } from "./components";
import Main from "./components/Main";
import { me } from "./store";

/*-------------------- COMPONENT --------------------*/

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <Router>
        <Main>
          <Switch>
            {/* Root route renders Login when not logged in already, and pets when logged in */}
            {/*<Route exact path="/" render={() => (isLoggedIn ? (<Redirect to="/pets"/>) : (*/}
            {/*<Login/>*/}
            {/*)*/}
            {/*)}*/}
            {/*/>*/}
            <Route exact path="/calendar/" component={ProfileConsole}/>
            <Route exact path="/login" component={Login}/>
            {/*<Route path="/signup" component={Signup}/>*/}
            {
              isLoggedIn &&
              <Switch>
                {/* Routes placed here are only available after logging in */}
                {/*<Route path="/home" component={UserHome}/>*/}
              </Switch>
            }
            {/* Displays our Login component as a fallback */}
            <ProfileConsole/>
          </Switch>
        </Main>
      </Router>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = state => ({
  // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
  // Otherwise, state.user will be an empty object, and state.user.id will be falsey
  isLoggedIn: !!state.user.id
  // currentUser: state.user
});

const mapDispatch = dispatch => ({
  loadInitialData() {
    dispatch(me());
  }
});

export default connect(mapState, mapDispatch)(Routes);

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};
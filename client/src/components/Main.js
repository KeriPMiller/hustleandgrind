import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { css } from "emotion";

// imported Components
import NavBar from "./NavBar";

class Main extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <NavBar/>
        <div className={css `padding-left:1rem; display`}>
          <p>An easier way to schedule coffee chats!</p>
          {children}
        </div>
      </div>
    );
  }
}

export default Main;
//
// const mapState = state => ({
//   isLoggedIn: !!state.currentUser.id
// });
// const mapDispatch = dispatch => ({
//   handleClick() {
//     dispatch(logout());
//   }
// });
// export default withRouter(connect(mapState, mapDispatch)(App));
/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object
};
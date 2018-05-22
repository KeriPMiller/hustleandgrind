import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteAccount } from "../store";


export const UserHome = (props) => {
  const { user, deleteUser } = props;
  const userId = user.id;
  return (
    <div className="userProfile">
      <h1>Your Profile</h1>
      <div className="userInfo">
        <div>
          <h4>Email:</h4>
          <p>{user.email}</p>
        </div>
        <div>
          <h4>Phone Number:</h4>
          <p>{user.phoneNumber}</p>
        </div>
        <div>
          <h4>Zip Code:</h4>
          <p>{user.zipCode}</p>
        </div>
        <div className="userButtons">
          <NavLink to="/updateProfile">
            <button>Edit Your Profile</button>
          </NavLink>
          <NavLink to="/login">
            <button id="deleteUser" onClick={event => deleteUser(event, userId)}>Delete</button>
          </NavLink>
        </div>
        <Matches userId={props.user.id}/>
      </div>
      );
      };


      // CONTAINER
      const mapState = state => ({user: state.currentUser});

      const mapDispatch = dispatch => ({
      deleteUser(event, userId) {
      event.preventDefault();
      if (window.confirm("Are you sure you want to delete your account?")) {
      dispatch(deleteAccount(userId));
    }
    },
    });


      export default connect(mapState, mapDispatch)(UserHome);

      /**
       * PROP TYPES
       */
      UserHome.propTypes = {
      email: PropTypes.string,
    };
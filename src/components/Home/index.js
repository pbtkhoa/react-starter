import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Home = ({ onLogout }) => (
  <div>
    Home
    <Link to="/auth/login">Login</Link>
    <button onClick={onLogout}>Logout</button>
  </div>
);

Home.propTypes = {
  onLogout: PropTypes.func.isRequired
};

export default Home;

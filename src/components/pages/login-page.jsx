import React from "react";
import { Link } from "react-router-dom";

const SecretPage = ({ isLoggedIn, onLogin }) => {
  return (
    <div className="jumbotron text-center">
      <h3>Login to see page</h3>
      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
      <Link to="/secret">Secret</Link>
    </div>
  );
};

export default SecretPage;

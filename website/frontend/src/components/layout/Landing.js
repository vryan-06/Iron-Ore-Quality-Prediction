import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const Landing = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Iron Ore Quality Predictor</h1>
          <p className="lead">
            Create Iron Ore Buyer or Seller account using our interactive web application, to buy as well as sell high quality Iron!
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

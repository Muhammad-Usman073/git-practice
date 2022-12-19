import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Home.css"
const Home = () => {
  return (
    <div>
      <div className="navigation-section" >
        <Link className="link" to="/">Home</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Home;

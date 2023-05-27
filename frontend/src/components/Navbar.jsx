import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
const Navbar = () => {
  return (
    <Fragment>
      <div className="flex justify-between items-center  bg-blue-950 text-white font-semibold text-[20px] p-4 space-x-8">
        <div>
          <Logo />
        </div>
        <div className="flex space-x-8 pr-4">
          <Link to={'/'}>
            <div>Home</div>
          </Link>

          <div>Login</div>
          <div>Register</div>
          <div>About</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;

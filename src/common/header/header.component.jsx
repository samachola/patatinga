import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="header-menu">
        <div className="header-menu-home">
          <h2>
            <Link to="/" style={{ textDecoration: "none" }}>
              HOME
            </Link>
          </h2>
        </div>
        {/* <div className="header-menus"> */}
          <div className="header-menu-signin">
            <h2>
              <Link to="/signin" style={{ textDecoration: "none" }}>
                LOGIN
              </Link>
            </h2>
          </div>
          <h2>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              REGISTER
            </Link>
          </h2>
        {/* </div> */}
      </div>
    );
  }
}

export default Header;

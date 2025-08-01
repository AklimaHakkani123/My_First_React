import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to={"/logout"}>LogOut</Link>
          </li>
          <li>
            <Link to="/notfound">Notfound</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;

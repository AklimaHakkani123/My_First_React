import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-item" : "pending-item"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-item" : "pending-item"
              }
              to="/product/10/hima"
            >
              Product
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-item" : "pending-item"
              }
              to="/profile"
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-item" : "pending-item"
              }
              to={"/logout"}
            >
              LogOut
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-item" : "pending-item"
              }
              to="/notfound"
            >
              Notfound
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
//react finished

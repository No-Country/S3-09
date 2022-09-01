import React from "react";
import { NavLink } from "react-router-dom";

const DrawerFooterNavLinks = ({ navIcon, path, text }) => {
    return (
        <NavLink
            to={path}
            className={({ isActive }) =>
                isActive
                    ? "linkContent navigateLinkActive"
                    : "linkContent navigateLinkDisable"
            }
        >
            {navIcon}
            <h3>{text}</h3>
        </NavLink>
    );
};

export default DrawerFooterNavLinks;

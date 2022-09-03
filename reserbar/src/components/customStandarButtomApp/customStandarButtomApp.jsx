import React from "react";
import { Link } from "react-router-dom";

// The god of the buttons.
const CustomStandarButtomApp = ({ link, text, onClick }) => {
    return (
        <Link to={link} onClick={onClick}>
            <button className="godButton">{text}</button>
        </Link>
    );
};

export default CustomStandarButtomApp;

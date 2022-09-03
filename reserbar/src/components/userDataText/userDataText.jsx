import React from "react";

const UserDataText = ({ label, text }) => {
    return (
        <div className="targetInfoUser">
            <div>{label}</div>
            <div>{text}</div>
        </div>
    );
};

export default UserDataText;

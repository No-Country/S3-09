import React from "react";
import { useSelector } from "react-redux";
import defaultImage from "../../assets/perfil.png";

const AvatarUser = () => {
    // get user
    const user = useSelector((store) => store.getOwnUserReducer);

    return (
        <img
            src={user.img ? user.img : defaultImage}
            alt="userImage"
            className="avatarUserCircleImage"
        />
    );
};

export default AvatarUser;

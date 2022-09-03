import React from "react";
import AvatarUser from "../../../components/avatarUser/avatarUser";
import { useSelector } from "react-redux";
import UserDataText from "../../../components/userDataText/userDataText";

const UserView = () => {
    const user = useSelector((store) => store.getOwnUserReducer);

    const ownUserInfo = [
        { label: "Nombre y apellido:", text: user.name },
        { label: "Nombre de usuario:", text: user.username },
        { label: "E-mail:", text: user.email },
        { label: "Telefono:", text: "1530556623" },
        { label: "contraseña:", text: "******" },
    ];

    return (
        <section className="userInfoContent">
            <AvatarUser />
            <div className="userInfoContent__info">
                {ownUserInfo.map((user, index) => {
                    return (
                        <UserDataText
                            key={index}
                            text={user.text}
                            label={user.label}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default UserView;

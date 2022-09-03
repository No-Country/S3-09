import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import AvatarUser from "../../../components/avatarUser/avatarUser";
import CustomStandarButtomApp from "../../../components/customStandarButtomApp/customStandarButtomApp";
import { FaSignOutAlt } from "react-icons/fa";

const HomeView = () => {
    let navigate = useNavigate();

    const dataUser = useSelector((store) => store.getOwnUserReducer);

    // Buttons info.
    const buttonsInfo = [
        { text: "Mis reservas", path: "/perfil/bookings" },
        { text: "Favoritos", path: "/perfil/favorites" },
        { text: "Mis datos", path: "/perfil/user" },
        { text: "Medios de pago", path: "/perfil/payment" },
        { text: "Soporte", path: "/perfil/support" },
    ];

    // handle logout
    const handleLogout = () => {
        localStorage.clear();
        window.location.href = "/";
    };

    return (
        <section className="perfilView">
            <AvatarUser />
            <h3> {dataUser.username}</h3>

            <div className="perfilView__buttons">
                {buttonsInfo.map((item, index) => {
                    return (
                        <CustomStandarButtomApp
                            key={index}
                            text={item.text}
                            link={item.path}
                        />
                    );
                })}
            </div>
            <Link
                to="/login"
                className="perfilView__signOut"
                onClick={handleLogout}
            >
                <FaSignOutAlt /> Cerrar sesión
            </Link>
        </section>
    );
};

export default HomeView;

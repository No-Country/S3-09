import React from "react";
import { Outlet } from "react-router-dom";
import LogoReserbar from "../../components/logoReserbar/logoReserbar";

const LoginPage = () => {
    return (
        <section className="loginContainer">
            <LogoReserbar />
            <Outlet />
        </section>
    );
};

export default LoginPage;

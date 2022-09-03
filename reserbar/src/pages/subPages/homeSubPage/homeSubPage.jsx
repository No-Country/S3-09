import React from "react";
import { Outlet } from "react-router-dom";

const HomeSubPage = () => {
    return (
        <section className="homeViewContent">
            <h1>Nueva reserva</h1>
            <div>
                <Outlet />
            </div>
        </section>
    );
};

export default HomeSubPage;

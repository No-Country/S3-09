import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import CustomStandarButtomApp from "../../../components/customStandarButtomApp/customStandarButtomApp";

const BookingsView = () => {
    return (
        <div className="bookingsContainer">
            <h1>Mis reservas</h1>
            <div className="bookingsContainer__navigation">
                <NavLink
                    to="active"
                    className={({ isActive }) =>
                        isActive
                            ? "bookingsContainer__navigation__navButtonLeft bookingActive"
                            : "bookingsContainer__navigation__navButtonLeft"
                    }
                >
                    Activas
                </NavLink>
                <NavLink
                    to="history"
                    className={({ isActive }) =>
                        isActive
                            ? "bookingsContainer__navigation__navButtonRight bookingActive"
                            : "bookingsContainer__navigation__navButtonRight"
                    }
                >
                    Historial
                </NavLink>
            </div>
            <div className="bookingsContainer__outlet">
                <Outlet />
            </div>
            <CustomStandarButtomApp link="/home" text="Nueva reserva" />
        </div>
    );
};

export default BookingsView;

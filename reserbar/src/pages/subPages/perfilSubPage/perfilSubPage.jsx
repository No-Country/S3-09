import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { getOwnUserAction } from "../../../redux/actions/getOwnUserAction";

const PerfilSubPage = () => {
    const dispatch = useDispatch();

    // Get info about own user.
    useEffect(() => {
        dispatch(
            getOwnUserAction({
                id: localStorage.getItem("userId"),
            })
        );
    }, [dispatch]);

    return (
        <section className="perfilPageContent">
            <Outlet />
        </section>
    );
};

export default PerfilSubPage;

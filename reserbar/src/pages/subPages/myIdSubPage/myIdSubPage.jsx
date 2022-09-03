import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { QRCode } from "react-qrcode-logo";
import { FaRegUserCircle } from "react-icons/fa";
import { getOwnUserAction } from "../../../redux/actions/getOwnUserAction";

const MyIdSubPage = () => {
    const dispatch = useDispatch();

    const user = useSelector((store) => store.getOwnUserReducer);

    // Get info about own user.
    useEffect(() => {
        dispatch(
            getOwnUserAction({
                id: localStorage.getItem("userId"),
            })
        );
    }, [dispatch]);

    return (
        <section className="myId">
            <h1>
                <i className="diinerTarget">Diiner ID</i> de acceso
            </h1>
            <div className="myId__target">
                <QRCode
                    logoWidth="35"
                    logoHeight="35"
                    bgColor="transparent"
                    fgColor="#ffffff"
                    // removeQrCodeBehindLogo={true}
                    // logoImage="https://png.pngtree.com/png-vector/20190830/ourmid/pngtree-crossed-spoon-and-fork-restaurant-and-food-logo-design-png-image_1716397.jpg"
                    value={`Reserva para ${JSON.stringify(user.username)}`}
                />
                <div className="diinerTarget__user">
                    <FaRegUserCircle />
                    <p>{user.username}</p>
                </div>
            </div>
            <p className="myId__description">
                Este código QR es personal e intransferible y funciona como
                credencial para acceder al Bar de tu tienda
            </p>
        </section>
    );
};

export default MyIdSubPage;

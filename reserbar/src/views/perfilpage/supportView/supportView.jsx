import React from "react";
import CustomInputForm from "../../../components/customInputForm/customInputForm";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomSubmitInputForm from "../../../components/customSubmitInputForm/customSubmitInputForm";
import * as Yup from "yup";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import IconSocial from "../../../components/iconSocial/iconSocial";
import { BsFillChatTextFill, BsTelephoneInbound } from "react-icons/bs";

const SupportView = () => {
    const dispatch = useDispatch();

    let navigate = useNavigate();

    // Logic form and validation.
    const { handleChange, values, errors, handleSubmit } = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().max(20).required("Name is required"),
            email: Yup.string()
                .email("Must be a valid email")
                .max(20)
                .required("Email is required"),
            message: Yup.string().max(200).required("Send a message"),
        }),
        onSubmit: (values) => {
            console.log("send values", values),
                navigate("/home", { replace: true });
        },
    });

    // Inputs to contact
    const normalInputs = [
        {
            onChange: handleChange,
            placeholder: "Nombre",
            label: "Nombre",
            type: "text",
            name: "name",
            value: values.name,
            leftIcon: <FaUser />,
            rightIcon: null,
            textError: errors.name ? errors.name : null,
        },
        {
            onChange: handleChange,
            placeholder: "email",
            label: "E-mail",
            type: "text",
            name: "email",
            value: values.email,
            leftIcon: <MdEmail />,
            rightIcon: null,
            textError: errors.email ? errors.email : null,
        },
        {
            onChange: handleChange,
            placeholder: "Mensaje",
            label: "Mensaje",
            type: "text",
            name: "message",
            value: values.message,
            leftIcon: <FaUser />,
            rightIcon: null,
            textError: errors.message ? errors.message : null,
        },
    ];

    // On click social icons
    const handleSocialClick = () => {
        console.log("social icon clicked");
    };

    // harcode social icons
    const socialIcons = [
        {
            text: "Llamanos",
            icon: <BsTelephoneInbound />,
            onclick: handleSocialClick,
        },
        { text: "E-mail", icon: <MdEmail />, onclick: handleSocialClick },
        {
            text: "Chat",
            icon: <BsFillChatTextFill />,
            onclick: handleSocialClick,
        },
    ];

    return (
        <section className="supportContent">
            <h1>Contactos</h1>
            <div className="supportContent__social">
                {socialIcons.map((item, index) => {
                    return (
                        <IconSocial
                            key={index}
                            text={item.text}
                            icon={item.icon}
                            onclick={item.onclick}
                        />
                    );
                })}
            </div>
            <form className="supportContent__form" onSubmit={handleSubmit}>
                <h1>Formulario de consulta</h1>
                {normalInputs.map((item, index) => {
                    return (
                        <CustomInputForm
                            key={index}
                            onChange={item.onChange}
                            label={item.label}
                            name={item.name}
                            value={item.value}
                            type={item.type}
                            placeholder={item.placeholder}
                            leftIcon={item.leftIcon}
                            rightIcon={item.rightIcon}
                            textError={item.textError}
                        />
                    );
                })}
                <CustomSubmitInputForm text="Enviar" />
            </form>
        </section>
    );
};

export default SupportView;

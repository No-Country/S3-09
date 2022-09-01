import { useEffect } from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import CustomInputForm from "../../components/customInputForm/customInputForm";
import { MdEmail, MdOutlineVpnKey } from "react-icons/md";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import CustomSubmitInputForm from "../../components/customSubmitInputForm/customSubmitInputForm";
import { Link } from "react-router-dom";
import GoogleButton from "react-google-button";
import { setVisiblePasswordAction } from "../../redux/actions/setVisiblePasswordAction";
import { postSignInAction } from "../../redux/actions/postSignInAction";

const SignInView = () => {
    const dispatch = useDispatch();

    const visiblePassword = useSelector(
        (store) => store.setVisiblePasswordReducer
    );

    // Logic form and validation.
    const { handleChange, values, errors, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object().shape({
            email: Yup.string()
                .email("Must be a valid email")
                .max(20)
                .required("Email is required"),
            password: Yup.string()
                .required("No password provided.")
                .min(6, "Should be 6 chars minimum."),
        }),
        onSubmit: async (values) => {
            dispatch(
            postSignInAction({
                    email: values.email,
                    password: values.password,
                })
            );
        },
    });

    // Handle visible text
    const handleVisiblePassword = () => {
        dispatch(setVisiblePasswordAction());
    };
    // Info inputs.
    const customInputMap = [
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
            placeholder: "contraseña",
            label: "Contraseña",
            type: visiblePassword ? "text" : "password",
            name: "password",
            value: values.password,
            leftIcon: <MdOutlineVpnKey />,
            rightIcon: visiblePassword ? (
                <AiOutlineEye onClick={handleVisiblePassword} />
            ) : (
                <AiOutlineEyeInvisible onClick={handleVisiblePassword} />
            ),
            textError: errors.password ? errors.password : null,
        },
    ];

    // Handle google button
    const handleClickGoogleSignIn = () => {
        console.log("CONNECT WITH GOOGLE");
    };
     
    return (
        <section className="signIn">
            <form onSubmit={handleSubmit} className="signIn__form">
                {customInputMap.map((item, index) => {
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
                <CustomSubmitInputForm text="Iniciar sesión" />
            </form>
            <div className="signIn__register">
                <p>
                    ¿No tenes cuenta?{" "}
                    <Link to="/login/register"> Registrate </Link>{" "}
                </p>
            </div>
            <div className="signIn__google">
                <p>Iniciar sesión con redes sociales</p>
                <GoogleButton onClick={handleClickGoogleSignIn} />
            </div>
        </section>
    );
};

export default SignInView;

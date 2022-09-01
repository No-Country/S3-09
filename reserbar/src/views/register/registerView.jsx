import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import CustomInputForm from "../../components/customInputForm/customInputForm";
import { MdEmail, MdOutlineVpnKey } from "react-icons/md";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import CustomSubmitInputForm from "../../components/customSubmitInputForm/customSubmitInputForm";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { setVisiblePasswordAction } from "../../redux/actions/setVisiblePasswordAction";
import { postRegisterAction } from "../../redux/actions/postRegisterAction";

const RegisterView = () => {
    const dispatch = useDispatch();

    let navigate = useNavigate();

    const visiblePassword = useSelector(
        (store) => store.setVisiblePasswordReducer
    );
    // const loadingRegisterPost = useSelector(store => store.postRegisterReducer.loading)

    // Logic form and validation.
    const { handleChange, values, errors, handleSubmit } = useFormik({
        initialValues: {
            name: "",
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().max(20).required("Name is required"),
            userName: Yup.string().max(10).required("UserName is required"),
            email: Yup.string()
                .email("Must be a valid email")
                .max(20)
                .required("Email is required"),
            password: Yup.string()
                .required("No password provided.")
                .min(6, "Should be 6 chars minimum."),
            confirmPassword: Yup.string()
                .required("Confirm your password")
                .oneOf([Yup.ref("password"), null], "Passwords must match"),
        }),
        onSubmit: (values) => {
            dispatch(
                postRegisterAction({
                    name: values.name,
                    userName: values.userName,
                    email: values.email,
                    password: values.password,
                })
            ),
                navigate("/login/signin", { replace: true });
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
            placeholder: "Nombre de usuario",
            label: "Nombre de usuario",
            type: "text",
            name: "userName",
            value: values.userName,
            leftIcon: <FaUser />,
            rightIcon: null,
            textError: errors.userName ? errors.userName : null,
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
        {
            onChange: handleChange,
            placeholder: "Repetir contraseña",
            label: "Repetir contraseña",
            type: visiblePassword ? "text" : "password",
            name: "confirmPassword",
            value: values.confirmPassword,
            leftIcon: <MdOutlineVpnKey />,
            rightIcon: visiblePassword ? (
                <AiOutlineEye onClick={handleVisiblePassword} />
            ) : (
                <AiOutlineEyeInvisible onClick={handleVisiblePassword} />
            ),
            textError: errors.confirmPassword ? errors.confirmPassword : null,
        },
    ];

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
                <CustomSubmitInputForm text="Registrarse" />
            </form>
            <div className="signIn__register">
                <p>
                    ¿Ya tenes cuenta? <Link to="/login/signin"> Ingresa </Link>
                </p>
            </div>
        </section>
    );
};

export default RegisterView;

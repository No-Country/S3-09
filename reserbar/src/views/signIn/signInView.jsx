import React from "react";
import * as Yup from "yup"
import { useFormik } from "formik";
import CustomInputForm from "../../components/customInputForm/customInputForm";
import { MdEmail, MdOutlineVpnKey } from 'react-icons/md'
import {AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

const SignInView = () => {

    const { handleChange, values, errors, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
            password: Yup.string()
                .required('No password provided.') 
                .min(6, 'Should be 6 chars minimum.')
        }),
        onSubmit: values => {
            console.log("SING IN", values)
        }
    })

    const customInputMap = [
        {
            onChange:handleChange ,placeholder: "email", type: "text", name: "email", value: values.email, leftIcon: <MdEmail />, rightIcon: null, textError: errors.email ? errors.email : null
        },
        {
            onChange:handleChange ,placeholder: "contraseña", type: "text",name: "password", value: values.password, leftIcon: <MdOutlineVpnKey />, rightIcon: <AiOutlineEyeInvisible /> , textError: errors.password ? errors.password : null
        },
    ] 

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {
                    customInputMap.map((item, index) => {
                        return <CustomInputForm 
                            key={index}
                            onChange={item.onChange}
                            label={item.name}
                            name={item.name}
                            value={item.value}
                            type={item.type}
                            placeholder={item.placeholder}
                            leftIcon={item.leftIcon}
                            rightIcon={item.rightIcon}
                            textError={item.textError}
                            />
                    })
                }
                <button type="submit"> Sing In </button>
            </form>
        </div>
    );
};

export default SignInView;

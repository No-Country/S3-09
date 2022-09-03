import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import CustomSubmitInputForm from "../../components/customSubmitInputForm/customSubmitInputForm";

import { addNewCardAction } from "../../redux/actions/addNewCardAction";
import CustomInputForm from "../../components/customInputForm/customInputForm";
import { addNewCardReducer } from "../../redux/reducers/addNewCardReducer";

const NewCard = () => {
    //   FUNCION PARA VALIDAD EL FORMATO DE LA FECHA
    // const dateFormat = (date) => {
    //     return /^(0[1-9]|1[0-2])\/([0-9]{2})$/g.test(date)
    // }
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { handleChange, values, errors, handleSubmit } = useFormik({
        initialValues: {
            card_number: "",
            card_name: "",
            card_expires: "",
            card_cvv: "",
        },
        validationSchema: Yup.object().shape({
            card_name: Yup.string()
                .min(10, "Debe tener al menos 10 caracteres")
                .max(40, "Debe tener menos de 40 caracteres")
                .required("Debe ingresar un nombre"),
            card_number: Yup.number()
                .min(16, "Debe ingresar 16 digitos")
                .max(16, "Debe ingresar 16 digitos")
                .required("Debe ingresar un numero de tarjeta"),
            card_expires: Yup.date()
                .min(new Date(), "La fecha de vencimiento no puede ser menor a la fecha actual")
                .required("Debe ingresar una fecha de expiración"),
            card_cvv: Yup.number()
                .min(3, "Debe ingresar 3 digitos")
                .max(3, "Debe ingresar 3 digitos")
                .required("Debe ingresar un cvv"),                
        }),
        onSubmit: async (values) => {
            dispatch(
                addNewCardAction({
                    card_number: values.card_number,
                    card_name: values.card_name,
                    card_expires: values.card_expires,
                    card_cvv: values.card_cvv,
                })
            );
        },
    });

    return (
        <>
            <Toolbar className="toolBar">
                <Grid>
                    <IconButton
                        aria-label="Regresar"
                        align="left"
                        onClick={() => navigate(-1)}
                    >
                        <ArrowBackIosNewIcon />
                    </IconButton>
                </Grid>
                <Container>
                    <Typography variant="h5" color="inherit" align="center">
                        Agrega nueva tarjeta
                    </Typography>
                </Container>
            </Toolbar>
            <Container maxWidth={"80"}>
                <Typography variant="subtitle1" color="inherit" align="center">
                    Completá los datos de la tarjeta de debito o crédito con la
                    que vas a pagar la reserva
                </Typography>
            </Container>
            <Container>
                <form onSubmit={handleSubmit}>
                    <Card className="inputContainer" elevation={2}>
                        <Grid container spacing={3} justifyContent="center">
                            <Grid item xs={10} md={6}>
                                <TextField
                                    required
                                    id="card_name"
                                    label="Nombre de la tarjeta"
                                    fullWidth
                                    autoComplete="cc-name"
                                    variant="standard"
                                    name="card_name"
                                    onChange={handleChange}
                                    value={values.card_name}
                                />
                            </Grid>
                            <Grid item xs={10} md={6}>
                                <TextField
                                    required
                                    id="card_number"
                                    label="Número de la tarjeta"
                                    fullWidth
                                    autoComplete="cc-number"
                                    variant="standard"
                                    name="card_number"
                                    onChange={handleChange}
                                    value={values.card_number}
                                />
                            </Grid>
                            <Grid item xs={10} md={6}>
                                <TextField
                                    required
                                    id="card_expires"
                                    label="Fecha de expiración"
                                    fullWidth
                                    autoComplete="cc-exp"
                                    variant="standard"
                                    name="card_expires"
                                    onChange={handleChange}
                                    value={values.card_expires}
                                />
                            </Grid>
                            <Grid item xs={10} md={6}>
                                <TextField
                                    required
                                    id="card_cvv"
                                    label="CVV"
                                    helperText="Últimos tres dígitos en la parte posterior de tu tarjeta"
                                    fullWidth
                                    autoComplete="cc-csc"
                                    variant="standard"
                                    name="card_cvv"
                                    onChange={handleChange}
                                    value={values.card_cvv}
                                />
                            </Grid>
                        </Grid>
                    </Card>
                    <Container className="buttonContainer" align="center">
                        <Button
                            variant="contained"
                            className="button"
                            type="submit"
                        >
                            Guardar Tarjeta
                        </Button>
                    </Container>
                </form>
            </Container>
        </>
    );
};

export default NewCard;

import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export const newCard = () => {
    return (
        <Grid>
            <Typography variant="h6" gutterBottom>
                Agrega nueva tarjeta
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="cardNumber"
                        label="Número de Tarjeta"
                        fullWidth
                        autoComplete="given-name"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="cardExpiration"
                        label="Fecha de Expiración"
                        fullWidth
                        autoComplete="family-name"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="cardSecurity"
                        label="Código de seguridad"
                        fullWidth
                        autoComplete="family-name"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="cardName"
                        label="Nombre de la Tarjeta"
                        fullWidth
                        autoComplete="family-name"
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};

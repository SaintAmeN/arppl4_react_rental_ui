import React from 'react';
import classes from './CarForm.module.css';
import Card from "../card/Card";
import {Grid, TextField} from "@mui/material";

const CarForm = () => {
    return (
        <div className={classes.CarForm}>
            <Card cardTitle={"Add Car Form"}>
                <Grid container>
                    <Grid item xs={12} className={classes.FormItem}>
                        <TextField label={"Name:"} variant={"filled"}></TextField>
                    </Grid>
                </Grid>
            </Card>
        </div>
    );
};

export default CarForm;
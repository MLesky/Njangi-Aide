import React from "react";
import { TextField, Button, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import lightTheme from "./theme";
import logo from './assets/images/logo.svg';
import logo2 from './assets/images/logo2.svg';

export function Logo({choice, halignCenter}){
    let icon = logo
    const halignment = {
        display: 'block'
    }
    if (halignCenter){
        halignment.margin = 'auto'
    }
    if (choice === 'secondary'){
        icon = logo2
    }
    return <img src={icon} alt='Logo' style={halignment}/>
}

export function FormTextField({label, type, name, onChange, required}){
    return (
        <ThemeProvider theme={lightTheme}>
            <TextField
                label={label}
                type={type}
                name={name}
                color='primary'
                required = {required}
                onChange = {onChange}
                fullWidth
                sx ={{my: '15px'}}
            />
        </ThemeProvider>
    );
}

export function FormButton({children, variant, type, fullWidth, bgcolor}){
    return (
        <ThemeProvider theme={lightTheme}>
            <Button
            variant={variant} 
            type={type}
            bgcolor={bgcolor}
            fullWidth = {fullWidth}
            sx={{
                my: '20px',
                margin: 'auto',
                display: 'block',
                p: 1
            }}
            >
                {children}
            </Button>
        </ThemeProvider>
    );
}


export function FormBox({children}){
    return (
        <ThemeProvider theme={lightTheme}>
            <Box sx={{
                width: {
                    mobile: 300,
                    tablet: 420,
                    laptop: 550,
                    desktop: 680,
                },
                minHeight: '50vh',
                px: '2rem',
                py: '1rem',
            }}>
                {children}
            </Box>
        </ThemeProvider>
    )
}
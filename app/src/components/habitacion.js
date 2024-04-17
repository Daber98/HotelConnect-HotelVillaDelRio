import React from "react";
import { Link } from "react-router-dom";
import { Box, Card, CardContent, CardActions, CardMedia, Typography, Button } from '@mui/material';
import Navbar from './navbar'

import image from "../image/Direccion.jpg"

const Habitacion = () => {
    return (
        <div>
            <Navbar/>
            <h1 style={{ textAlign: 'center' }}>Reserva tu habitación</h1>
            <Box display="flex" justifyContent="center">
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
                    <Tarjeta titulo="Habitacion 1" contenido="Habitación para una sola persona" />
                    <Tarjeta titulo="Habitacion 2" contenido="Habitación para dos personas" />
                    <Tarjeta titulo="Habitacion 3" contenido="Habitación para tres personas" />
                </div>
            </Box>
        </div>
    )
}

const Tarjeta = ({ titulo, contenido }) => {
    return (
        <Card sx={{ maxWidth: 345, marginBottom: '20px' }}>
            <CardMedia
                component="img"
                height="194"
                image= {image} // Puedes reemplazar esta imagen con la imagen de tus habitaciones
                alt="Imagen de la habitación"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {titulo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {contenido}
                </Typography>
            </CardContent>
            <CardActions>
                <Button component={Link} to="/login" size="small" color="primary">
                    Ver más
                </Button >
            </CardActions>
        </Card>
    )
}

export default Habitacion;

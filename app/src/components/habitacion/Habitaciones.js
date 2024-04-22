import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Card, CardContent, CardActions, CardMedia, Typography, Button, Grid } from '@mui/material';
import Navbar from '../NavbarDashboard'

import image1 from "../../image/Hotel.jpg";
import image2 from "../../image/Hotel.jpg";
import image3 from "../../image/Logo.jpg";

const Habitaciones = () => {
    // Estado para controlar qué tipos de habitaciones se muestran
    const [mostrarSimple, setMostrarSimple] = useState(true);
    const [mostrarDoble, setMostrarDoble] = useState(true);
    const [mostrarTriple, setMostrarTriple] = useState(true);

    // Función para generar las tarjetas de habitación
    const generarTarjetas = () => {
        const tarjetas = [];
        // Habitaciones simples
        if (mostrarSimple) {
            for (let i = 1; i <= 15; i++) {
                const imagen = i % 3 === 1 ? image1 : i % 3 === 2 ? image2 : image3;
                tarjetas.push(
                    <Grid item xs={4} key={`simple-${i}`}>
                        <Tarjeta numero={i} contenido="Habitación Simple" imagen={imagen} />
                    </Grid>
                );
            }
        }
        // Habitaciones dobles
        if (mostrarDoble) {
            for (let i = 1; i <= 8; i++) {
                const imagen = i % 3 === 1 ? image1 : i % 3 === 2 ? image2 : image3;
                const numero = i + 15; // Para asegurar que los números sean únicos
                tarjetas.push(
                    <Grid item xs={4} key={`doble-${i}`}>
                        <Tarjeta numero={numero} contenido="Habitación Doble" imagen={imagen} />
                    </Grid>
                );
            }
        }
        // Habitación triple
        if (mostrarTriple) {
            const imagenTriple = image3; // Asigna la imagen correspondiente a la habitación triple
            tarjetas.push(
                <Grid item xs={4} key="triple">
                    <Tarjeta numero={24} contenido="Habitación Triple" imagen={imagenTriple} />
                </Grid>
            );
        }

        return tarjetas;
    };

    return (
        <div>
            <Navbar/>
            <h1 style={{ textAlign: 'center' }}>Reserva tu habitación</h1>
            <Box display="flex" justifyContent="center">
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
                    {/* Botones para filtrar las habitaciones */}
                    <Button
                        variant={mostrarSimple ? "contained" : "outlined"}
                        color="primary"
                        onClick={() => setMostrarSimple(!mostrarSimple)}
                    >
                        Habitaciones Simples
                    </Button>
                    <Button
                        variant={mostrarDoble ? "contained" : "outlined"}
                        color="primary"
                        onClick={() => setMostrarDoble(!mostrarDoble)}
                    >
                        Habitaciones Dobles
                    </Button>
                    <Button
                        variant={mostrarTriple ? "contained" : "outlined"}
                        color="primary"
                        onClick={() => setMostrarTriple(!mostrarTriple)}
                    >
                        Habitaciones Triples
                    </Button>
                </div>
            </Box>
            <Box display="flex" justifyContent="center">
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
                    <Grid container spacing={2}>
                        {generarTarjetas()}
                    </Grid>
                </div>
            </Box>
        </div>
    );
}

const Tarjeta = ({ numero, contenido, imagen }) => {
    return (
        <Card sx={{ maxWidth: 345, marginBottom: '20px' }}>
            <CardMedia
                component="img"
                image={imagen}
                alt="Imagen de la habitación"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Habitación {numero}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {contenido}
                </Typography>
            </CardContent>
            <CardActions>
                <Button component={Link} to="/Reservaciones" size="small" color="primary">
                    Ver más
                </Button>
            </CardActions>
        </Card>
    );
}

export default Habitaciones;

import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Card, CardContent, CardMedia, Grid, Box } from '@mui/material';
import Navbar from '../home/navbar';

import image1 from "../../image/Simple21.jpg";
import image2 from "../../image/Parqueo.jpg";
import image3 from "../../image/Restaurante.jpg";
import fondo from "../../image/fondo.jpg"; // Importa la imagen de fondo

import "../../css/inicio.css";

const Inicio = () => {
    return (
        <div className="inicio-container" style={{ backgroundImage: `url(${fondo})` }}> 
            <Navbar/>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <Card sx={{ width: '80%', maxWidth: 800 }}>
                    <CardContent>
                        <Typography variant="h1" className="welcome-title" align="center">¡Bienvenido!</Typography>
                        <Typography variant="body1" className="welcome-message">"Sumérgete en el lujo y la comodidad, donde cada detalle está diseñado para hacer de tu estancia una experiencia inolvidable."</Typography>
                        <Box sx={{ textAlign: 'center' }}>
                            <Button variant="contained" component={Link} to="/login" className="welcome-button">Iniciar sesión</Button>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} sm={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="300" 
                            image={image1}
                            alt="Imagen 1"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Comodas habitaciones
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Nuestras habitaciones son tu refugio privado, donde la comodidad es nuestra prioridad número uno.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="300" 
                            image={image2}
                            alt="Imagen 2"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Amplio parqueo
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Tu comodidad es nuestra prioridad. Aprovecha nuestro conveniente servicio de estacionamiento para una experiencia sin contratiempos.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="300" 
                            image={image3}
                            alt="Imagen 3"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Restaurante
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Descubre una experiencia gastronómica única en nuestro exclusivo restaurante, donde cada plato es una obra maestra de sabor y frescura.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Button variant="contained" component={Link} to="/habitacion" className="welcome-button">Explora nuestras habitaciones</Button>
            </Box>
        </div>
    );
}

export default Inicio;

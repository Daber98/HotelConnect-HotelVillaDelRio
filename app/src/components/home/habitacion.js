import React from "react";
import { Link } from "react-router-dom";
import { Box, Card, CardContent, CardActions, CardMedia, Typography, Button } from '@mui/material';
import Navbar from '../home/navbar'

import image1 from "../../image/Hotel.jpg";
import image2 from "../../image/Direccion.jpg";
import image3 from "../../image/Logo.jpg";

const Habitacion = () => {
    return (
        <div>
            <Navbar/>
            <h1 style={{ textAlign: 'center' }}>Reserva tu habitación</h1>
            <Box display="flex" justifyContent="center">
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
                    <Tarjeta titulo="Habitacion 1" contenido="¿Estás buscando un lugar cómodo y tranquilo para tu próxima escapada? ¡No busques más! Nuestra habitación individual es perfecta para viajeros solitarios que desean un espacio íntimo y acogedor para descansar."  imagen={image1}/>
                    <Tarjeta titulo="Habitacion 2" contenido="¿Estás buscando un lugar cómodo y tranquilo para tu próxima escapada con un amigo o familiar? ¡No busques más! Nuestra habitación con dos camas individuales es perfecta para aquellos que desean un espacio acogedor para descansar y compartir momentos especiales juntos." imagen={image2}/>
                    <Tarjeta titulo="Habitacion 3" contenido="¿Estás planeando una escapada con amigos o familiares? ¡Tenemos la solución perfecta para ti! Nuestra habitación con tres camas es ideal para grupos pequeños que buscan comodidad y conveniencia durante su estadía." imagen={image3}/>
                </div>
            </Box>
        </div>
    )
}

const Tarjeta = ({ titulo, contenido, imagen}) => {
    return (
        <Card sx={{ maxWidth: 345, marginBottom: '20px' }}>
            <CardMedia
                component="img"
                height="194"
                image= {imagen}
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

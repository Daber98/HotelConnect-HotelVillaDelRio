import React, { useState } from "react";
import { Box, Card, CardContent, Typography, TextField, Button, Grid } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs'; // Importa dayjs para manejar fechas
import Navbar from "../NavbarDashboard";

const Reservaciones = () => {
  // Estado para almacenar los datos de la reserva
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    selectedDate: null,
  });

  // Manejar cambios en los campos del formulario
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Manejar cambio de fecha seleccionada
  const handleDateChange = (date) => {
    setFormData({ ...formData, selectedDate: date });
  };

  // Función para enviar la reserva
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Aquí puedes enviar los datos de la reserva a tu backend o hacer lo que necesites
  };

  return (
    <div>
      <Navbar/>
      <Box m={2}>
        <Grid container spacing={2}>
          {/* Tarjeta de imágenes */}
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Imágenes del hotel
                </Typography>
                {/* Aquí puedes mostrar las imágenes del hotel */}
              </CardContent>
            </Card>
          </Grid>

          {/* Tarjeta de formulario de reserva */}
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Reservación de habitación
                </Typography>
                {/* Formulario de reserva */}
                <form onSubmit={handleSubmit}>
                  <TextField
                    label="Nombre"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                  <TextField
                    label="Apellido"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                  <TextField
                    label="Teléfono"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  <LocalizationProvider dateAdapter={AdapterDayjs} style={{margin: 5}}>
                    <DatePicker
                      label="Fecha de llegada"
                      value={dayjs(formData.selectedDate)} // Convierte la fecha a un objeto Dayjs
                      onChange={(newValue) => handleDateChange(newValue?.toDate())} // Convierte la fecha seleccionada a Date
                      renderInput={(params) => <TextField {...params} margin="normal" fullWidth 
                      />}
                    />
                  </LocalizationProvider>
                  <Button type="submit" variant="contained" color="primary" fullWidth>
                    Reservar habitación
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Reservaciones;

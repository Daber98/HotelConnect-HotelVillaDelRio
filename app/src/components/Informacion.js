import React, { useLayoutEffect, useRef } from "react"; // Asegúrate de importar React sin llaves
import { Card, CardContent, Typography } from '@mui/material';
import { Map, Marker, NavigationControl } from 'mapbox-gl';
import Navbar from './navbar'

import '../css/Informacion.css';

const Informacion = () => {
    const mapDiv = useRef(null);

    useLayoutEffect(() => {
        const map = new Map({
            container: mapDiv.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [-89.9843, 14.6297],
            zoom: 17,
        });

        new Marker()
            .setLngLat([-89.9843, 14.6297])
            .addTo(map);

        map.on('load', () => {
            map.addLayer({
                id: 'example',
                type: 'circle',
                source: {
                    type: 'geojson',
                    data: {
                        type: 'FeatureCollection',
                        features: [{
                            type: 'Feature',
                            properties: {},
                            geometry: {
                                type: 'Point',
                                coordinates: [-89.9843, 14.6297]
                            }
                        }]
                    }
                },
                paint: {
                    'circle-radius': 4,
                    'circle-color': '#007cbf'
                }
            });
        });

        map.addControl(new NavigationControl());
    }, []);

    return (
        <div>
            <Navbar/>
            <h1 style={{ textAlign: 'center' }}>Informacion</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '50%' }}>
                    <Card>
                        <CardContent>
                            <div
                                ref={mapDiv}
                                style={{
                                    height: '400px',
                                    width: 'auto',
                                    position: 'sticky',
                                    top: 0,
                                    left: 0,
                                    borderRadius: 15,
                                }}
                            />
                            <Typography variant="h5" component="h2">
                                Ubicación
                            </Typography>
                            <Typography color="textSecondary">
                                Chipilapa 2-66 Zona 6 Jalapa, 2da. Avenida<br />
                                Jalapa, Jalapa
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <div style={{ width: '50%' }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Correo
                            </Typography>
                            <Typography color="textSecondary">
                                info@hotelvilladelrio.com
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <div style={{ width: '50%' }}>
                    <Card className="card-informacion">
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Teléfono
                            </Typography>
                            <Typography color="textSecondary">
                                +502 7922 3001
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Informacion;

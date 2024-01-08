import React from "react";
import { useState } from 'react';
import styleGeolocal from '../Styles/geolocal.module.css'


const Geolocal = ()=> {

    const [position, setPosition] = useState(null);
    const [error, setError] = useState(null);

    const getPosition = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setPosition({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                    setError(null);
                },
                (error) => {
                    setError(error.message);
                    setPosition(null);
                }
            );
        } else {
            setError('Géolocalisation non supportée par ce navigateur');
        }
    };

    return (
        <div className={styleGeolocal.app}>
            <h1>Localisation</h1>
            <p>{position ? `Latitude : ${position.lat}, Longitude : ${position.lng}` : 'Obtenir votre position'}</p>
            <button onClick={getPosition}>Obtenir votre position</button>
            {error && <p>{error}</p>}
        </div>
    );
}

export default Geolocal;
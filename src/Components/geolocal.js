import React, { useState } from "react";
import styleGeolocal from '../Styles/geolocal.module.css';
import localisation from "../ressources/local_.png";

const Geolocal = () => {
    const [position, setPosition] = useState(null);
    const [error, setError] = useState(null);
    const [locationName, setLocationName] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const getPosition = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setPosition({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                    setError(null);
                    getLocationName(position.coords.latitude, position.coords.longitude);
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

    const getLocationName = async (lat, lng) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=0faf47c243c1f56c608d2f75750327f2`);
            const data = await response.json();
            const name = data.name;
            setLocationName(name);
        } catch (error) {
            console.error('Error fetching location name:', error);
            setLocationName('');
        }
    };

    const handleInputChange = async (e) => {
        setLocationName(e.target.value);

        try {
            const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${e.target.value}&limit=5&appid=0faf47c243c1f56c608d2f75750327f2`);
            const data = await response.json();
            const suggestions = data.map((item) => item.name);
            setSuggestions(suggestions);
        } catch (error) {
            console.error('Error fetching location suggestions:', error);
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setLocationName(suggestion);
        setSuggestions([]);
    };

    const handleButtonClick = () => {
        getPosition();
    };

    const handleImageClick = () => {
        getPosition();
    };

    return (
        <div className={styleGeolocal.searchGlobal}>
            <h1>Vos repas livrés chez vous :</h1>
            <form className={styleGeolocal.searchContener}>
                <input
                    type="search"
                    placeholder="Votre position actuelle"
                    className={styleGeolocal.search}
                    value={locationName}
                    onChange={handleInputChange}
                />
                {suggestions.length > 0 && (
                    <ul className={styleGeolocal.suggestions}>
                        {suggestions.map((suggestion, index) => (
                            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                                {suggestion}
                            </li>
                        ))}
                    </ul>
                )}
                {position ? `Latitude : ${position.lat}, Longitude : ${position.lng}` : ''}
                <button onClick={handleButtonClick}>Obtenir votre position</button>
                {error && <p>{error}</p>}
                <img
                    src={localisation}
                    alt="icon de localisation"
                    className={styleGeolocal.local}
                    onClick={handleImageClick}
                />
            </form>
        </div>
    );
};

export default Geolocal;

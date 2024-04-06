import React, { useRef, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { Box } from '@chakra-ui/react';

const libraries = ['places'];
const mapContainerStyle = {
    width: '100vw',
    height: '100vh',
};

const center = {
    lat: 37.7455675, // default latitude
    lng: -122.4473427, // default longitude
};

function MapDisplay() {
    const originRef = useRef(null);
    const destinationRef = useRef(null);

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    useEffect(() => {
        if (!isLoaded) return;

        const originAutocomplete = new window.google.maps.places.Autocomplete(originRef.current);
        const destinationAutocomplete = new window.google.maps.places.Autocomplete(destinationRef.current);

        originAutocomplete.setFields(['place_id', 'geometry', 'name']);
        destinationAutocomplete.setFields(['place_id', 'geometry', 'name']);
    }, [isLoaded]);

    if (loadError) {
        return <div>Error loading maps</div>;
    }

    if (!isLoaded) {
        return <div>Loading maps</div>;
    }

    return (
        <div className="Map">
            <Box>
                <input type="text" id="origin" placeholder="Enter origin" ref={originRef} />
                <input type="text" id="destination" placeholder="Enter destination" ref={destinationRef} />
            </Box>
            <div className="MapInput">

            </div>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={10}
                center={center}
            >
                <Marker position={center} />
            </GoogleMap>
        </div>


    );
}

export default MapDisplay;

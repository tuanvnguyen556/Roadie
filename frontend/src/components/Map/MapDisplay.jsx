"use client";

import React from 'react';
import {
    APIProvider,
    AdvancedMarkerContext,
    Map
} from "@vis.gl/react-google-maps";

export default function MapDisplay() {
    return (
        <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <div style={{ height: "100vh", width: "100%" }}>
                <Map
                    interactive={true}
                    draggable={true} // Set draggable to true
                    zoom={9}
                    center={{ lat: 37.7749, lng: -122.4194 }}
                >
                    
                </Map>
            </div>
        </APIProvider>
    );
}
import React from 'react';
import './Home.css';
import MapDisplay from '../Map/MapDisplay';

export default function Home() {
    return (
        <div className="Home">
            <header className="Home-header">
                <p>
                    Welcome to the Home page!
                </p>
            </header>
            <p>Here is a map:</p>
            <MapDisplay />
        </div>
    );
}
import React from 'react';
import './Home.css';
import Map from '../Map/Map';

export default function Home() {
    return (
        <div className="Home">
            <header className="Home-header">
                <p>
                    Welcome to the Home page!
                </p>
            </header>
            <p>Here is a map:</p>
            <Map></Map>
        </div>
    );
}
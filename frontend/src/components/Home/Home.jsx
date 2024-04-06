import React from 'react';
import './Home.css';
import MapDisplay from '../Map/MapDisplay';
import ChakraBasic from '../ChakraBasic/ChakraBasic';
export default function Home() {
    return (
        <div className="Home">
            <header className="Home-header">
               <h1>ROADIE</h1>
            </header>
            <div className="sections">
                <ChakraBasic />
                <MapDisplay />
            </div>



        </div>
    );
}
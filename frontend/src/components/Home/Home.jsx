import React from 'react';
import './Home.css';
import MapDisplay from '../Map/MapDisplay';
import ChakraBasic from '../ChakraBasic/ChakraBasic';
export default function Home() {
    return (
        <div className="Home">
            <header className="Home-header">
                <p>
                    Welcome to the Home page!
                </p>
            </header>
            <p>Here is a map:</p>
            <div className="sections">
                <ChakraBasic/>
                <MapDisplay /> 
            </div>
            
            
           
        </div>
    );
}
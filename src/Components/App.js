import React from 'react';
import './App.scss';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Works from './Works/Works';
import Contact from './Contact/Contact';

function App(){
    return(
        <div>
            <Navbar></Navbar>
            <Home/>
        </div>
    )
}

export default App;
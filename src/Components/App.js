import React from 'react';
import './App.scss';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Works from './Works/Works';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';


function App(){
    return(
        <div>
            <Navbar></Navbar>
            <Home/>
            <Footer></Footer>
        </div>
    )
}

export default App;
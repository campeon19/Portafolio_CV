import React from 'react';
import './App.scss';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Works from './Works/Works';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



function App(){
    return(
        <div>
            
            <BrowserRouter>
            <Navbar/>
                <Switch>
                    <Route path='/Works'>
                        <Works/>
                    </Route>
                    <Route path='/Contact'>
                        <Contact/>
                    </Route>
                    <Route path='/'>
                        <Home/>
                    </Route>
                </Switch>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default App;
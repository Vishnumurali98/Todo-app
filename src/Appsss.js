import React from 'react'
import About from './component/About/About'
import Header from './component/Header/Header'
import Todoapp from './component/Todoapp/Todoapp'
import {BrowserRouter as Router,Route} from "react-router-dom";

export default function Appsss() {
    return (
        <>
        {/* <Header />
        <About />
        <Todoapp /> */}
        <Router>
            <Header/>
            <Route path="/"  exact component={Todoapp}></Route>
            <Route path="/About" component={About}></Route>
        </Router>
            
        </>
    )
}

import React from "react";
/********** Components ****************/
import StartupPage from "../Components/startup/startup";
import NavBar from '../Components/NavBar/NavBar';

import Footer from '../Components/Footer/Footer';
export default function Startup(props) {
    
   
    return (
        <div>
            <NavBar scrolling={props.scrolling} />

            <StartupPage/>


            <Footer />
        </div>
    )
}
import React from "react";
/********** Components ****************/
import NavBar from '../Components/NavBar/NavBar';
import Home from '../Components/Home/Home';
import About from '../Components/About/About';
import Startups from '../Components/Startups/Startups';
import Produits from '../Components/Produits/Produits';
import Footer from '../Components/Footer/Footer';
import Contact from '../Components/comingsoon/Contact';
import Services from '../Components/Services/Services';
import Categories from '../Components/Categories/Categories';
import Word from '../Components/Word/Word';



export default function LandingPage(props) {


    return (
        <div>
            <NavBar scrolling={props.scrolling} />
           
            <Home />

            <About />

            <Services />

            <Startups />

            <Produits />

            <Contact />

            <Word />

            <Categories />


            <Footer />
        </div>
    )
}
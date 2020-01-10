import React from 'react'
import phAbout1 from './phAbout1.jpg'

import {Link} from 'react-router-dom'
function About(){
    return(
        <div className="divAbout">
            <h1 className="tites">About 'The Phish' from Vermont</h1>

                <h2 className="quoteAbout">"Set the gearshift to the High Gear of your Soul!"</h2>

            <img src={phAbout1} alt="About Phish" className="phAbout"/>

            <p className="pAbout">Phish is an American rock band that formed in Burlington, Vermont in 1983. The band is known for musical improvisation, extended jams, blending of genres, and a dedicated fan base. The band consists of guitarist Trey Anastasio, bassist Mike Gordon, drummer Jon Fishman, and keyboardist Page McConnell, all of whom perform vocals, with Anastasio being the primary lead vocalist.</p>
            <a href="https://en.wikipedia.org/wiki/Phish" className="aAbout">To Learn More!</a>

            <nav className="aboutNav" style={{padding: 10}}>
                <Link to="/Trey" style={{padding: 10}}>TREY</Link>
                <Link to="/Page" style={{padding: 10}}>PAGE</Link>
                <Link to="/Mike" style={{padding: 10}}>MIKE</Link>
                <Link to="/Fishman" style={{padding: 10}}>FISHMAN</Link>
            </nav>

           
            
        </div>
    )
}

export default About
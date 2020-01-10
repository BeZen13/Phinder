import React from 'react'
import {Link} from 'react-router-dom'


function Header(){
    return(
        <div>
            <nav className="coolNav" style={{padding: 10}}>
                <Link to="/" style={{padding: 10}}>Home</Link>
                <Link to="/SetList" style={{padding: 10}}>SetList Finder</Link>
                <Link to="/About" style={{padding: 10}}>About The Band</Link>
            </nav>
        </div>
    )

}


export default Header
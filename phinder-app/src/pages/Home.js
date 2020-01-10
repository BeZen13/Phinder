import React, {useState, useEffect} from 'react'
import axios from 'axios'
import phHome from './phHome.jpg'
import phLogo from './phLogo.jpg'



function Home(){

    const [tdiphs, setTdiph] = useState([])

    useEffect(() => {
        console.log("okay")

        axios.get('https://vschool-cors.herokuapp.com?url=https://api.phish.net/v3/setlists/recent?apikey=6CA549706137553C0AB9')
        .then(resp => {
           
            setTdiph(resp.data.response.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])

  
    
console.log(tdiphs)
    return(
        <div>
            
            <h1 className="quoteHome">"You Enjoy Myself!"</h1>
            
            <img src={phHome} alt="PhishHome" className="phHome"/>

            <h1 className="neato">The Ultimate Improvisational Experience</h1>
            <img className="phLogo" src={phLogo} alt="phLogo"/>
            <h2 className="ten">10 Recent Shows!</h2>
    
            <p className="recent">{tdiphs.map(tdiph =>
            <p key={tdiph.showid}>{tdiph.short_date} || {tdiph.location}</p>)}
            </p>





        </div>
    )

}


export default Home
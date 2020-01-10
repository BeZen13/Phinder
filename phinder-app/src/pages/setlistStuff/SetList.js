import React, {useState} from 'react'
import axios from 'axios'
import phSet from './phSet.jpg'




function SetList(){
    const [dates, setDates] = useState([])
    const [userLists, setUserLists] = useState([])
    
    
    
    
   const clicked = (event) => {
    event.preventDefault()   
    const deets = dates
       console.log(deets)
       //takes user info.
       //next to get it pushed into a axios get request for the date supplied by user! :)
      
       axios.get(`https://vschool-cors.herokuapp.com?url=https://api.phish.net/v3/setlists/get?apikey=6CA549706137553C0AB9&showdate=${deets}`)
        .then(resp => {
           
            setUserLists(resp.data.response.data)
            
        })
        .catch(err =>{
            console.log(err)
        })

    }
        //calling axios get with user provided date...
    console.log(userLists)
  
    return(
        <div>
            <h1 className="titleSet">P*H*I*N*D*E*R</h1>
            <h2 className="quoteSet">"The trick is to surrender to the Flow!"</h2>
            <img src={phSet} alt="PhishList" className="phSet"/>
            <h2>Please Enter a Date (year-month-day || xxxx-xx-xx)</h2>
            
            <input className="userSet"
            type="text"
            value={dates}
            placeholder="SHOW Date?"
            onChange={event => setDates(event.target.value)}
            />
            <button onClick={clicked} className="find">Find It!</button>

        <div> 
            <h1>{dates}</h1>   
            <div className="locale">{userLists.map(userList =>
            
            <div key={userList.showid}>
                <h1>{userList.venue}</h1>
              <h2> **** {userList.short_date} ||  
                 {userList.location} ****</h2>
            <h3>{userList.setlistdata}</h3>
                </div>
            )}
                
            </div>
     </div> 
            
       
       
        
        
        </div>


    )
}

export default SetList
import React, {useState} from 'react'
import axios from 'axios'
import phSet from './phSet.jpg'




function SetList(){
    const [dates, setDates] = useState([])
    const [userLists, setUserLists] = useState([])
    const [info, setInfo] = useState([])
    
    
    
    
   const clicked = (event) => {
    event.preventDefault()   
    const deets = dates
       console.log(deets)
       //takes user info.
       //next to get it pushed into a axios get request for the date supplied by user! :)
      
       axios.get(`https://vschool-cors.herokuapp.com?url=https://api.phish.net/v3/setlists/get?apikey=6CA549706137553C0AB9&showdate=${deets}`)
        .then(resp => {
           
           //This was an epic battle to make this :) Thanks Eric
            const preSetList = resp.data.response.data[0].setlistdata.split("set-label'>")
           const nextSetList = preSetList.slice(1,preSetList.length)
           const finalSetList = nextSetList.map(set => {
               const parts = set.split("</span>")
               console.log(parts)
               const label = parts[0]
               const prePartOne = parts[1].split("setlist-song'>")
               const songs = prePartOne.slice(1,prePartOne.length).map(song => {
                   return song.split("<")[0]
               })
               console.log(songs)

                return{
                    label, songs
                    
                }
               
           })
            
           //setting the state :)
           console.log(preSetList.slice(1,preSetList.length))
            setUserLists(resp.data.response.data)
            console.log(finalSetList)
            setInfo(finalSetList)
            
            
            
        })
        .catch(err =>{
            console.log(err)
        })

    }
        
    console.log(userLists)
    
    //breking down the long string version 1.0
    /*const songList = userLists.map(show =>{
        
       const x = []
        x.push(show.setlistdata)
        console.log(x)
       return <div className="songster">
            <ul>
    <li>{x.map(song => {
        console.log(song)
        const y = []
        const z =  song.split("'>")[1].split("</")[0]
        y.push(z)
        console.log(y)
    }
    )}</li>
        </ul>
        </div>
    })*/

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

        
        
        <div className="stuff"> 
            <h1>{dates}</h1>
            <h1>=============</h1>   
            <div className="locale">{userLists.map(userList =>
            
            <div key={userList.showid}>
            
                <h1>{userList.venue.split(">")[1].split("<")[0]}</h1>
              <h2> **** {userList.short_date} ||  
                 {userList.location} ****</h2>
            
             </div>   
            )}
            <div>
                <div className="hereWeGo">
                    {info.map(stuff => 
                        <div>
                        <h1>{stuff.label}</h1>
                        <ul>
                            <li>{stuff.songs.map(s => <li>***{s}***</li>)}</li>
                        </ul>
                        </div>
                    )}
                </div>
            </div>
                
            </div>
     </div> 
            
       
       
        
        
        </div>


    )
}

export default SetList
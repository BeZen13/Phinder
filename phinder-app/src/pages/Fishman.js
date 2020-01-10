import React from 'react'
import phiFish from './phiFish.jpg'
function Fishman(){
    return(
        <div className="divFishman">
            <h1>Jon Fishman</h1>

            <img src={phiFish} alt="Jon Fishman" className="phiFish"/>

            <p className="pFishman">  Born Jonathan Fishman on February 19th, 1965 (with no middle name).

Family: Jon was born in Philadelphia, PA; moved to Syracuse, NY in the early 1970's. His father Len is a retired orthodontist and a sculptor. His late mother Mimi was a regular audience fixture at shows, started (with fan and friend David Shulman) a nonprofit organization in 1999 (The Mimi Fishman Foundation) to raise awareness to the early detection of glaucoma, and has appeared onstage with Phish several times. Fish has two siblings, a sister, Julie, and a brother, David. Fish was married on 9/28/97 to Pam Tengiris in Las Vegas, from whom he is now divorced. He is now married to Briar, with whom he has three children - Ella Cynthia Ruth (b. 12/30/01, 9 days early, @ 6lbs 10oz), Jack Bradley (b. 9/30/03, @ 8lbs 4oz), and Rosie; they live in Maine.</p>
            
            <a href="https://en.wikipedia.org/wiki/Jon_Fishman">To Learn More!</a>
        </div>
    )
}

export default Fishman
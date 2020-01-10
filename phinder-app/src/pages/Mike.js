import React from 'react'
import phMike from './phMike.jpg'
function Mike(){
    return(
        <div className="divMike">
            <h1>Mike Gordon</h1>

            <img src={phMike} alt="Mike Gordon" className="phMike"/>

            <p className="pMike"> Born Michael Eliot Gordon on June 3rd, 1965.

Family: Mike was born in Boston, MA. He moved to Sudbury, MA, a suburb outside of Boston, in 1968. His father Robert Gordon founded the Store 24 convenience chain. His mother Marjorie Minkin is a painter (featured in the song “Minkin”), and is responsible for the creation of the "Minkin backdrops" that were used on stage in 1994. Marjorie also collaborated with Mike in 2003, creating custom pieces of art related to his 2003 solo album. Mike has one brother, David, who is an Environmental Lawyer. Mike married Priscilla Foster (illustrator for Mike's Corner) on 6/20/98, divorced several years later, and is now remarried with a daughter (and a parrot named Angel) and living in Vermont.
</p>
        <a href="https://en.wikipedia.org/wiki/Mike_Gordon">To Learn More!</a>
        </div>
    )
}

export default Mike
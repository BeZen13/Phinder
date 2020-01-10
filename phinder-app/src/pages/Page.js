import React from 'react'
import phPage from './phPage.jpg'
function Page(){
    return(
        <div className="divPage">
            <h1>Page McConnel</h1>

            <img src={phPage} alt="Page McConnell" className="phPage"/>

            <p className="pPage">Born Page Samuel McConnell on May 17th, 1963.

Family: Page was born in Philadelphia, PA and moved to Basking Ridge, NJ, circa 1967. His father Dr. Jack McConnell worked at McNeil and helped develop Tylenol, then started a free health clinic staffed by retired health personnel in Hilton Head, SC; a Dixieland jazz fan, Dr. McConnell he has performed on stage with Phish several times. His mother, Mary Ellen, is also a musician and an avid pianist. Page has one brother, Steve, who appeared on stage as “Tom Hanks” during Phish's first post-hiatus show at Madison Square Garden on New Year's Eve '02-'03, and a sister, Katie, who helped create the first band newsletters. Page was married 9/8/95, to Sofi Dillof, with whom he has one daughter, Delia Edna McConnell; he has since remarried, and presently lives in Vermont.</p>
            <a href="https://en.wikipedia.org/wiki/Page_McConnell">To Learn More!</a>
        </div> 
    )
}

export default Page
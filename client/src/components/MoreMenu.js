import { useState, useEffect, useRef } from "react";
import ellipsis from "../assets/icons/ellipsis.svg";
import topicIcon from "../assets/icons/comment-dots-regular.svg";
import momentsIcon from "../assets/icons/bolt-solid.svg";
import blueIcon from "../assets/icons/flag-solid.svg";
import newsletterIcon from "../assets/icons/paper-plane-solid.svg";
import twitterProfIcon from "../assets/icons/rocket-solid.svg";
import adsIcon from "../assets/icons/arrow-up-right.svg";
import analyticsIcon from "../assets/icons/chart-column-solid.svg";
import settingsIcon from "../assets/icons/gear-solid.svg";
import helpIcon from "../assets/icons/circle-question-regular.svg";
import displayIcon from "../assets/icons/palette-solid.svg";
import keyboardIcon from "../assets/icons/universal-access-solid.svg";

function MoreMenu () {

    const ref = useRef()

    const [ isMenuOpen, setIsMenuOpen ] = useState(false)

    //https://dev.to/collegewap/how-to-detect-click-outside-in-a-react-component-2b6k
 
    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
                setIsMenuOpen(false)
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [ isMenuOpen ] )

    return (
        <div className="more-wrapper"> 

            <button className='left-side-buttons more-button' onClick={() => setIsMenuOpen(true)}>
                <img src={ellipsis} className="ico" alt='more'/>  
                <span className="buttontext  lsb-text">More</span> 
            </button><br />

            { isMenuOpen &&
            <div  className="more-menu">
                <ul className="more-menu-list" ref={ref}>
                    <li><img className="more-menu-icons" src={topicIcon} alt='' /> Topics</li>
                    <li><img className="more-menu-icons" src={momentsIcon} alt='' /> Moments</li>
                    <li><img className="more-menu-icons" src={blueIcon} alt='' /> Cattr Blue</li>
                    <li><img className="more-menu-icons" src={newsletterIcon} alt='' /> Newsletters</li>
                    <li><img className="more-menu-icons" src={twitterProfIcon} alt='' /> Cattr for Professionals</li>
                    <li><img className="more-menu-icons" src={adsIcon} alt='' /> Cattr Ads</li>
                    <li><img className="more-menu-icons" src={analyticsIcon} alt='' /> Analytics</li>
                    <li><img className="more-menu-icons" src={settingsIcon} alt='' /> Settings and Privacy</li>
                    <li><img className="more-menu-icons" src={helpIcon} alt='' /> Help Center</li>
                    <li><img className="more-menu-icons" src={displayIcon} alt='' /> Display</li>
                    <li><img className="more-menu-icons" src={keyboardIcon} alt='' /> Keyboard Shortcuts</li>
                </ul>
            </div> }
        </div>
    )

   
}

export default MoreMenu;
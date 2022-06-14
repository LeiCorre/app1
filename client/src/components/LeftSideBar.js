import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { pagePathname } from "../features/pathname/Pathname";
import catIcon from "../assets/icons/cat.svg"
import ellipsis from "../assets/icons/ellipsis.svg"
import defaultProfilePic from "../assets/icons/userprof.svg"
import HomeButton from "./pages/nav/HomeButton";
import ExploreButton from "./pages/nav/ExploreButton";
import NotificationButton from "./pages/nav/NotificationButton";
import MessagesButton from "./pages/nav/MessagesButton";
import BookmarkButton from "./pages/nav/BookmarkButton";
import ListButton from "./pages/nav/ListButton";
import ProfileButton from "./pages/nav/ProfileButton";
import MoreMenu from "./MoreMenu";
import featherIcon from "../assets/icons/feather-pointed-solid.svg"





export function LeftSideBar() {

  const dispatch = useDispatch();

  function buttonClick () {
    
    dispatch(pagePathname(window.location.pathname))
    let popup = document.getElementById("MeowPop")
    let popupo = document.getElementById("MeowPopO")
    popup.classList.add("PopupVisible")
    popupo.classList.add("PopupVisible")

    window.history.pushState({}, "", "/compose/meow")
  }



    return (
      <div className='leftsidebar'>
         <Link to="/home"> 
         <button className='catButton cathome-button'>
           <img src={catIcon} className="catIcon" alt='home'/>
          </button><br />
         </Link>
         <Link to="/home"> 
          <HomeButton />
         </Link>
         <Link to="/explore">
          <ExploreButton />
         </Link>
         <Link to="/notifications">
           <NotificationButton />
         </Link>
         <Link to="/messages">
           <MessagesButton />
         </Link>
         <Link to="/bookmarks">
           <BookmarkButton />
         </Link>
         <Link to="/lists">
           <ListButton />
         </Link>
         <Link to="/profile">
           <ProfileButton />
         </Link>


        <MoreMenu />

         


          <button className='bigBlueButton left-side-buttons meow-button' onClick={() => buttonClick()}>
            <img src={featherIcon}  className="blue-meow-icon " alt="New Meow" />
            <span className="lsb-text">Meow</span>
          </button>
        
         <button className="left-side-buttons profile-button">
          <img className='default-profile-thumb' src={defaultProfilePic} alt='user profile' />
          <span className='profile-button-text lsb-text'>
            <span className='profile-button-name'>Jennifer Mckay</span><br/> 
            <span className='profile-button-username'>@Username</span>
          </span>
          <img className='profile-button-more lsb-text' src={ellipsis} alt='more account options' />
          </button> 
         
      </div>
    )
}



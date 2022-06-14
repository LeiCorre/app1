import {LeftSideBar} from "../../components/LeftSideBar";
import MeowPopup from "../MeowPopup";
import RightSideBar from "../RightSideBar";
import { Link, Outlet } from "react-router-dom"
import gear from "../../assets/icons/gear-solid.svg"

function Notifications () {
    return (
        <div className="App-Wrapper">
            <MeowPopup />
            <LeftSideBar />
            <div className="maincol">
                <div className="explore-center">
                    
                    <div className='notification-feed'>
                        <h1 className='home-bar'>Notifications <img id='top-meows' src={gear} alt="top posts"></img></h1>
                        <h2 className="notify-tab-h2">
                            <Link id="notify-tab-notify" className="notify-tabs" to="/notifications">All</Link>
                            <Link id="notify-tab-mention" className="notify-tabs" to="mentions">Mentions</Link>
                        </h2>
                        <Outlet />
                    </div>

                </div>
                <RightSideBar/>
            </div>
        </div>
    )
}

export default Notifications;
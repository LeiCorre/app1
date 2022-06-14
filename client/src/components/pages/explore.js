import {LeftSideBar} from "../../components/LeftSideBar";
import ExploreSearch from "../Explore-search";
import WhoToFollow from "../WhoToFollow";
import ExploreFeed from "../ExploreFeed";
import MeowPopup from "../MeowPopup";
import { Link } from "react-router-dom"


function Explore () {
    return (
        <div className="App-Wrapper">
            <MeowPopup />
            <LeftSideBar />
            <div className="maincol">
                <div className="explore-center">
                    <div className='explore-header-bar'>
                            <ExploreSearch />
                
                        <div className='explore-feed-tab-links'>
                            <Link to="/explore/tabs/for-you"><h1 className='explore-feed-header' id="exp-for-you-header" >For You</h1></Link>
                            <Link to="/explore/tabs/trending"><h1 className='explore-feed-header' id="exp-trending-header">Trending</h1></Link>
                            <Link to='/explore/tabs/news'><h1 className='explore-feed-header' id="exp-news-header">News</h1></Link>
                        </div>
                    </div>

                    <ExploreFeed />

                </div>
                <div className='rightsidebar'>
                    <div className='right-side-body'>
                        <WhoToFollow/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore;
import hash from "../../../assets/icons/hashtag.svg"

function ExploreButton () {
    return (
        <div>
            <button className='left-side-buttons explore-button'>
                <img src={hash} className="ico" alt='explore'/>  
                <span className="buttontext lsb-text">Explore</span> 
            </button>
        </div>
    )
}

export default ExploreButton;

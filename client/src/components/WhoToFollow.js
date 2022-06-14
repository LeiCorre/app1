import FollowSuggestion from "./FollowSuggestion";

function WhoToFollow () {
    return (
      <div className="who-to-follow">
        <h3 className='who-to-follow-header'>Who To Follow</h3>
        <FollowSuggestion />
        <div className='who-to-follow-more'><a href="/">Show More</a></div>
        
      </div>
    )
  }

 export default WhoToFollow;
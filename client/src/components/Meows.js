import ellipsis from "../assets/icons/ellipsis.svg"
import defaultProfilePic from "../assets/icons/userprof.svg"
import MeowReply from "./Meow-reply"
import MeowRepost from "./Meow-repost"
import MeowLike from "./Meow-like"
import MeowShare from "./Meow-share"

function Meows () {
    return ( 
      <div className='newsfeed-post'> 
        <img  className='newsfeed-post-more' height='18px' width='18px' src={ellipsis} alt='more options' />
        <img className='newsfeed-profilepic' src={defaultProfilePic} alt='User profile'/>
        <div className='newsfeed-post-content'>
          <h4 className='newsfeed-post-name'>Jennifer Mckay</h4> 
          <h5 className='newsfeed-post-username'>&nbsp;@username</h5> 
          <h6 className="newsfeed-post-date">&nbsp;Jan 31</h6> 
          <br />  
          <p className='newsfeed-post-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Aenean tempus mi elit, in consectetur massa rutrum quis. Quisque et auctor turpis, nec bibendum dolor. 
            Aliquam erat volutpat. Morbi lobortis erat tellus, egestas efficitur nisi placerat sed. 
            Phasellus eu dui et ipsum tempus dapibus. Praesent eu tortor suscipit, interdum nibh at, semper ante. 
            Curabitur luctus posuere ex, in iaculis elit rutrum quis. Fusce interdum convallis erat in consectetur. 
            Duis commodo scelerisque bibendum. Aliquam eu iaculis mi. Nam interdum sapien in enim euismod mattis. 
          </p>
          <span id='newsfeed-post-icon-box'> 
            <MeowReply />
            <MeowRepost />
            <MeowLike />
            <MeowShare />
          </span>
  
       </div>
       
      </div>
    )
  }

  export default Meows
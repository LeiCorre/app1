import calendar from "../assets/icons/calendar.svg"
import smiley from "../assets/icons/smiley.svg"
import poll from "../assets/icons/poll.svg"
import media from "../assets/icons/media.svg"
import defaultProfilePic from "../assets/icons/userprof.svg"

function NewMeow () {
    return (
      <div className='newMeow'>
        <img className='new-meow-profilepic' src={defaultProfilePic} alt='Profile'></img>
        <form>
          <textarea className='new-meow-input' type='text' placeholder="What's Happening?"/> <br /> <br /> <br /> <br /> 
          <span className='meow-icon-container'> 
            <img className='new-meow-icons' src={media} alt="add media"/>
            <img className='new-meow-icons' src={poll} alt="add a poll"/>
            <img className='new-meow-icons' src={smiley} alt="add an emoticon"/>
            <img className='new-meow-icons' src={calendar} alt="set meow for a specific date and time"/> 
          </span>
          <input id='new-meow-submit' type='submit' value='Meow'></input>
        </form>
      </div>
    )
  }

  export default NewMeow;
import profile from "../assets/icons/user.svg"

function FollowSuggestion () {
    return (
      <div className='who-to-follow-suggest'>
        <img className='follow-suggest-pic' src={profile} alt='profile'/>
        <div className='follow-suggest-text'>
          <p className='follow-suggest-name'>Garfield the Cat</p>
          <p className='follow-suggest-username'>@GarfieldLasagna</p>
        </div>
        <button className='who-to-follow-button'>Follow</button>
      </div>
    )
  }

  export default FollowSuggestion;
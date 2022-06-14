import profile from "../../../assets/icons/user.svg"

function ProfileButton () {
    return (
        <div>
            <button className='left-side-buttons profile-button'>
                <img src={profile} className="ico" alt='profile' />  
                <span className="buttontext lsb-text">Profile</span> 
            </button>
        </div>
    )
}

export default ProfileButton;
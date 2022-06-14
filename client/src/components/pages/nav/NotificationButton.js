import bell from "../../../assets/icons/bell.svg"

function NotificationButton () {
    return (
        <div>
             <button className='left-side-buttons notification-button'>
                 <img src={bell} className="ico" alt='notifications' />  
                 <span className="buttontext lsb-text">Notifications</span> 
            </button>
        </div>
    )
}

export default NotificationButton;
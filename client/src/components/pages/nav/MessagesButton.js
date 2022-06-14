import mess from "../../../assets/icons/envelope.svg"

function MessagesButton () {
    return (
        <div>
            <button className='left-side-buttons message-button'>
                <img src={mess} className="ico" alt='envelope'/>  
                <span className="buttontext lsb-text">Messages</span> 
            </button>
        </div>
    ) 
}

export default MessagesButton
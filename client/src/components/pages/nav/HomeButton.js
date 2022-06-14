import home from "../../../assets/icons/home.svg"

function HomeButton () {
    return (
        <div>
            <button className='left-side-buttons home-button'>
                <img src={home} className="ico" alt='Home'/>  
                <span className="buttontext lsb-text">Home</span> 
            </button>
        </div>
    )
}

export default HomeButton;
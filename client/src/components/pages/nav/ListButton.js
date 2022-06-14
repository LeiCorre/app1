import list from "../../../assets/icons/list.svg";

function ListButton () {
    return (
        <div>
            <button className='left-side-buttons list-button'>
                <img src={list} className="ico" alt='lists'/>  
                <span className="buttontext lsb-text">Lists</span> 
            </button>
        </div>
    )
}

export default ListButton;
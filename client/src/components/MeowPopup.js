import NewMeow from "./NewMeow";
import xIcon from "../assets/icons/x-solid.svg";
import { useSelector } from "react-redux";
import ClickOff from "./MeowClickOff";

//https://stackoverflow.com/questions/65982665/react-17-0-1-invalid-hook-call-hooks-can-only-be-called-inside-of-the-body-of

function MeowPopup () {

    const path = useSelector((state) => state.pathname.value) 

    return (
        <div className='popupmaster'>
             <div className='MeowPopup-overlay' id="MeowPopO" onClick={()=> ClickOff(path)}/>
            <div className='MeowPopup' id='MeowPop'>
                <img className="xIcon" src={xIcon} onClick={()=> ClickOff(path)} alt='' />

                <NewMeow className='new-meow-pop' /> 
            </div>
        </div>
    )

}

export default MeowPopup;
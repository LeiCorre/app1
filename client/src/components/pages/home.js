import {LeftSideBar} from "../../components/LeftSideBar";
import MainCol from "../../components/MainCol";
import MeowPopup from "../MeowPopup";


function Home () {
    return (
        <div className="App-Wrapper">
            <MeowPopup />
            <LeftSideBar />
            <MainCol />
        </div>
    )
}




export default Home;
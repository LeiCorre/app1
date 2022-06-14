import {LeftSideBar} from "../../components/LeftSideBar";
import MeowPopup from "../MeowPopup";
import RightSideBar from "../RightSideBar";
import gear from "../../assets/icons/gear-solid.svg"


function Lists () {
    return (
        <div className="App-Wrapper">
            <MeowPopup />
            <LeftSideBar />
            <div className="maincol">
                <div className="explore-center">
                    
                    <div className='list-feed'> 
                    <h1 className='home-bar'>Lists <img id='top-meows' src={gear} alt="top posts"></img></h1>

                    <div>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim ligula nulla, id tincidunt erat varius id. Suspendisse a interdum dui, sit amet imperdiet diam. Sed leo mi, elementum eu dui sit amet, egestas rhoncus ipsum. Curabitur euismod mattis facilisis. Maecenas id metus eget felis luctus elementum. Mauris a arcu commodo, pretium mi sit amet, cursus felis. Nulla suscipit ultricies eros, a bibendum nisl finibus vel. Fusce quam diam, tincidunt quis semper non, sodales ac velit. Sed sit amet commodo metus, faucibus mattis nisl. Vivamus vel metus mi. Aenean sit amet nunc in erat pulvinar lobortis. Nullam at velit dignissim massa gravida mollis id ut nulla. Nullam vitae magna nibh. Aenean convallis vehicula porta.

Morbi lobortis hendrerit leo at dictum. Suspendisse consectetur leo feugiat sapien blandit, in maximus libero dignissim. Donec aliquam erat nec diam lobortis vestibulum. Etiam scelerisque facilisis ipsum id fermentum. Vestibulum sed odio risus. Nullam non lorem dapibus, malesuada felis at, tempor purus. Suspendisse feugiat congue mi, a egestas sem consectetur sit amet. Nunc ligula ipsum, suscipit ac mauris tempus, hendrerit imperdiet nunc. Quisque risus quam, sagittis non interdum sed, euismod a lacus.

Quisque aliquet, ligula non semper sodales, lectus dolor porta mi, at iaculis sapien quam id orci. Donec pulvinar eget enim accumsan sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sit amet enim non ex fringilla tristique. Duis dapibus sagittis suscipit. Praesent commodo, mi ullamcorper ullamcorper dapibus, leo neque sodales massa, in vehicula arcu ex at enim. Nulla ultricies elit non orci eleifend convallis. Sed in turpis eu dolor porttitor volutpat. Proin porta leo eu tortor egestas porttitor. Duis consequat bibendum ex et pretium. Fusce euismod mi a nisi pharetra, vitae rhoncus tellus tincidunt. Donec vel quam id enim aliquam blandit vitae eget justo. Maecenas tincidunt massa eget lorem mattis facilisis. 
                     </div>  
                    </div>

                </div>
                <RightSideBar/>
            </div>
        </div>
    )
}

export default Lists;
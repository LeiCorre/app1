import NewsFeed from "./NewsFeed";
import RightSideBar from "./RightSideBar";


function MainCol() {
  return (
    <div className='maincol'>
        <NewsFeed />
        <RightSideBar />

    </div>
    
  )
}

export default MainCol;
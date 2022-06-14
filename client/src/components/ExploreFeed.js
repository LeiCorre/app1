import { Outlet } from "react-router-dom"

function ExploreFeed () {

    return (
        <div id='explore-feed'>
           
            <div className='explore-feed-viewer'>
                
              <Outlet />  
                
             </div>

        
        </div>
    )
}

export default ExploreFeed;
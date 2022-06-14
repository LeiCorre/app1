import React from "react";
import DateFormatter from "./TimeFormat";
import { useSelector, useDispatch } from "react-redux";
import { allArticles, fetchArticles, articleStatus } from "../features/newsapi/newsSlice";

function NewsTab () {

    const dispatch = useDispatch();

    let newsStored = useSelector(allArticles)
  
    const artStatus = useSelector(articleStatus)
    
      React.useEffect(() => {
        if (artStatus === 'idle') {
          dispatch(fetchArticles())
  
        } else {
         return newsStored
        }
  
      }, [artStatus, dispatch, newsStored])
  


      if (artStatus !== 'success') {
        return (
          <div>
            Loading...
          </div>
        )
      } else {
      
      const articleFeed = newsStored.map((x, i) => { if (i > 0) 
        
      return <a key={i} className='TrendingNewsLink' href={x.url}>
        <div className='TrendingPostBox TrendingPostBox-news'>
          <div className='TrendingPostBox-text'>
            <div className='TrendingPostBox-name'>
              {x.source.name}
            </div> 
            &nbsp;&#183;&nbsp;&nbsp;
            <div className='TrendingPostBox-date'>
              {DateFormatter(x.publishedAt)}
            </div>
            <br />
            <div className='TrendingPostBox-title'>
              {x.title}
            </div> 
          </div>
          <div className='TrendingPostBox-pic'>
            <img className='TrendingPostBox-picture' src={x.urlToImage} alt='' />
          </div>
          
      </div>
    </a>
    })

      return (
        <div className='NewsTab-Main'>
            <img className='explore-feed-tab-pic' alt='' src={newsStored[0].urlToImage} /> 
            <a href={newsStored[0].url}><div className="explore-feed-tab-picOverlay">
              <div className='explore-feed-tab-picOverlay-name'></div>
              <div className='explore-feed-tab-picOverlay-headerinfo'>
                {newsStored[0].source.name} &nbsp;&#183;&nbsp;&nbsp; {DateFormatter(newsStored[0].publishedAt)}
              </div>
              <div className='explore-feed-tab-picOverlay-title'>
                {newsStored[0].title}
              </div>
            </div>
            </a>

            <br />
            <br />
            <br />
            <br />

          { articleFeed }

        </div>
      )
    }
}

export default NewsTab;
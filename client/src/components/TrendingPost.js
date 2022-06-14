import React from "react";
import DateFormatter from "./TimeFormat";
import { useSelector, useDispatch } from "react-redux";
import { allArticles, fetchArticles, articleStatus } from "../features/newsapi/newsSlice";


function TrendingPost() {

  const dispatch = useDispatch();

  const newsStored = useSelector(allArticles)

  const artStatus = useSelector(articleStatus)
  
    React.useEffect(() => {
      if (artStatus === 'idle') {
        dispatch(fetchArticles())

      }

    }, [dispatch, artStatus])

    
  
    if (artStatus !== 'success') {
      return (
        <div>
          Loading...
        </div>
      )
    } else {
      
      const list = newsStored.slice(0, 5)

      const feed = list.map((x, i) => {
        
      return (
        <a key={i} className='TrendingNewsLink' href={x.url}>
        <div className='trending-post' id='trend'>
        <span className='trending-post-text'>
          <h5 className='trending-post-category'>{x.source.name}</h5>
          &nbsp;&nbsp;&nbsp;
          <h6 className='trending-post-time'>{DateFormatter(x.publishedAt)}</h6>
        
          <h4 className='trending-post-what'>{x.title}</h4> 
        </span>
        <img className="trending-post-picture" src={x.urlToImage} alt='' />
        <br />
      </div> 
      </a>
      )

    })
    return (
      <div>
        
       {feed}
      </div>
    )
 } 
  }

  export default TrendingPost;
  
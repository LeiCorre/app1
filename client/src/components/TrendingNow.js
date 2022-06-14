import TrendingPost from "./TrendingPost";

function TrendingNow() {

    return (
      <div id='trending-now'>
        <h3 id='trending-now-header'>What's happening? </h3>
        <TrendingPost />
      
        <a id='trending-now-more-a' href="/explore/tabs/news"><div id='trending-now-more'>Show More</div></a>
      </div>
    )
  }

export default TrendingNow;
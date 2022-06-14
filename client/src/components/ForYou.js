import TrendingPostBox from "./TrendingPostBox";
import kitty from "../assets/pictures/kitty.jpg"
//Most popular posts?
function ForYou () {
    return (
        <div className='ForYou-Main'>
            <img className='kitty-filler-pic' src={kitty} alt="kitty" />
            content in news is 28rem in width which is why the cat picture appears smaller than the news picture
            Content will Appear here!
            <TrendingPostBox />
        </div>
    )
}

export default ForYou;
import kitty from "../assets/pictures/kitty.jpg"

function TrendingTab () {
    
    return (
        <div className='TrendingTab-Main'>
            <img className='kitty-filler-pic' src={kitty} alt="kitty" />
            Most popular #topics
        </div>
    )
}

export default TrendingTab;
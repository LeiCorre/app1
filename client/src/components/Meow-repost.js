function MeowRepost () {
    function colorChange (e) {
        e.currentTarget.style.color = "green"
        e.currentTarget.querySelector('svg').style.backgroundColor = "rgba(84, 231, 96, 0.200)";
        e.currentTarget.querySelector('.tooltip').style.display = "inline-block"


    }

    function colorChangeBack (e) {
        e.currentTarget.style.color = "black"
        e.currentTarget.querySelector('svg').style.backgroundColor = "transparent";
        e.currentTarget.querySelector('.tooltip').style.display = "none"
    }
    return (
        <span className='newsfeed-post-icon-box meowICO' id='newsfeed-post-repost' onMouseOver={colorChange} onMouseOut={colorChangeBack}>
            <span className='tooltip'>
                Repost
            </span>
           <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="retweet" class="newsfeed-post-icons newsfeed-post-icon-123 repost" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M614.2 334.8C610.5 325.8 601.7 319.1 592 319.1H544V176C544 131.9 508.1 96 464 96h-128c-17.67 0-32 14.31-32 32s14.33 32 32 32h128C472.8 160 480 167.2 480 176v143.1h-48c-9.703 0-18.45 5.844-22.17 14.82s-1.656 19.29 5.203 26.16l80 80.02C499.7 445.7 505.9 448 512 448s12.28-2.344 16.97-7.031l80-80.02C615.8 354.1 617.9 343.8 614.2 334.8zM304 352h-128C167.2 352 160 344.8 160 336V192h48c9.703 0 18.45-5.844 22.17-14.82s1.656-19.29-5.203-26.16l-80-80.02C140.3 66.34 134.1 64 128 64S115.7 66.34 111 71.03l-80 80.02C24.17 157.9 22.11 168.2 25.83 177.2S38.3 192 48 192H96V336C96 380.1 131.9 416 176 416h128c17.67 0 32-14.31 32-32S321.7 352 304 352z"></path></svg>
            <span className="post-icon-text">500</span> 
      </span>
    )
}

export default MeowRepost
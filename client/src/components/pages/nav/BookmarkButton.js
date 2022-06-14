import bookmark from "../../../assets/icons/bookmark.svg"

function BookmarkButton () {
    return (
        <div>
            <button className='left-side-buttons bookmark-button'>
                <img src={bookmark} className="ico" alt='bookmarks'/>  
                <span className="buttontext lsb-text">Bookmarks</span> 
            </button>
        </div>
    )
}

export default BookmarkButton;
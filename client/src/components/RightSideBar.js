import WhoToFollow from "../components/WhoToFollow";
import TrendingNow from "../components/TrendingNow";
import Searchbar from "../components/Searchbar";

function RightSideBar() {
    return (
      <div className='rightsidebar'>
        <Searchbar />
        <div className='right-side-body'>
        <TrendingNow />
        <WhoToFollow />
        <div id="right-footer">
          <a href='/'>Terms of Service</a>
          <a href='/'>Privacy Policy</a>
          <a href='/'>Cookie Policy</a>
          <br />
          <a href='/'>Ads Info</a>
          <a href='/'>More <svg id='right-sidebar-more' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis" class="svg-inline--fa fa-ellipsis" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M64 192C28.61 192 0 220.6 0 256s28.61 64 64 64s64-28.62 64-64S99.39 192 64 192zM256 192C220.6 192 192 220.6 192 256s28.61 64 64 64s64-28.62 64-64S291.4 192 256 192zM448 192c-35.39 0-64 28.62-64 64s28.61 64 64 64s64-28.62 64-64S483.4 192 448 192z"></path></svg></a>
          © 2021 Cattr, Inc. <br />
          Icons provided by FontAwesome
        </div>
        </div>
      </div>
    )
  }

  export default RightSideBar;
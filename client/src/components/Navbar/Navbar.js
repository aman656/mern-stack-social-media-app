import "./Navbar.css";
import {Search,Notifications,Chat,Person} from '@mui/icons-material' ;

const Navbar = ()=>{
    return(
        <div className="navContainer">
        <div className="navLeft">
          <span className="logo"><i>Meta</i></span>
        </div>
        <div className="navCenter">
          <div className="searchbar">
            <Search className="searchIcon" />
            <input
              placeholder="Search for friend, post or video"
              className="searchInput"
            />
          </div>
        </div>
        <div className="navRight">
          <div className="navLinks">
            <span className="navLink">Homepage</span>
            <span className="navLink">Timeline</span>
          </div>
          <div className="navIcons">
            <div className="navIconItem">
              <Person />
              <span className="navIconBadge">1</span>
            </div>
            <div className="navIconItem">
              <Chat />
              <span className="navIconBadge">2</span>
            </div>
            <div className="navIconItem">
              <Notifications />
              <span className="navIconBadge">1</span>
            </div>
          </div>
          <img src="/assets/me.jpg" alt="" className="navImg"/>
        </div>
      </div>

    )

}

export default Navbar
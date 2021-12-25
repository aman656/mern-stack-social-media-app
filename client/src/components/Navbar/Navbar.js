import "./Navbar.css";
import { Search, Notifications, Chat, Person } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="navContainer">
      <div className="navLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">
            <i>Meta</i>
          </span>
        </Link>
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
          <Link to={"/chat"}>
            <div className="navIconItem">
              <Chat />
              <span className="navIconBadge">2</span>
            </div>
          </Link>
          <div className="navIconItem">
            <Notifications />
            <span className="navIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.name}`}>
          <img src="/assets/me.jpg" alt="" className="navImg" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

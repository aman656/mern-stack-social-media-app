import "./profile.css";
import Navbar from "../../components/Navbar/Navbar";
import LeftBar from "../../components/LeftBar/LeftBar";
import Feed from "../../components/Feed/Feed";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { Add } from "@mui/icons-material";

const Profile = () => {
  const [usering, setUser] = useState({});
  const { user } = useContext(AuthContext);
  const [allfriends, setAllFriends] = useState([]);
  const params = useParams().uname;
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  console.log(params);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users/?uname=${params}`);
      setUser(res.data);
    };
    fetchUser();
  }, [params]);

  useEffect(() => {
    const gettingFriends = async () => {
      try {
        const res = await axios.get(`/users/friends/${user._id}`);
        setAllFriends(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    gettingFriends();
  }, [user._id]);

  return (
    <>
      <Navbar />
      <div className="profile">
        <LeftBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={
                  user.coverPic ? PF + user.coverPic : PF + "assets/cover1.jpg"
                }
                alt=""
              />
              <img
                className="profileUserImg"
                src={user.profilePic ? PF + user.profilePic : PF + "no1.jpg"}
                alt="no one"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.name}</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed uname={params} />
            <div className="rightbar">
              <div className="rightbarwrapper">
                {user.name !== params && (
                  <button className="followbtn">
                    Follow <Add />
                  </button>
                )}
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo">
                  <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">Karachi</span>
                  </div>
                  <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">Karachi</span>
                  </div>
                  <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">
                      {user.relationship === 1
                        ? "Single"
                        : user.relationship === 1
                        ? "Married"
                        : "Single"}
                    </span>
                  </div>
                </div>
                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">
                  {allfriends.map((friend) => (
                    <Link
                      to={"/profile/" + friend.name}
                      style={{ textDecoration: "none" }}
                    >
                      <div className="rightbarFollowing">
                        <img
                          src={
                            friend.profilePic
                              ? PF + friend.profilePic
                              : PF + "no1.jpg"
                          }
                          alt=""
                          className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">
                          {friend.name}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            );
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

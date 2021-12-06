import './Right.css'


const Right = ()=>{
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img  className="birthdayImg"  src="/assets/gift.jpg"  alt = "friends"                   />
                    <span className="birthdayText"> Ali and  2 others have birthday today</span>

                </div>
                <img  src="/assets/friends.jpg" className="rightbarAd" alt = "gift"          />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src='/assets/me.jpg' alt="mine pic" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">Aman</span>
    </li>
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src='/assets/me.jpg' alt="mine pic" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">Ali</span>
    </li>


                </ul>

            </div>

        </div>
    )
}

export default Right
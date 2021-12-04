import './LeftBar.css'
import {
    RssFeed,Chat,PlayCircleFilledOutlined,Group,Bookmark,HelpOutline,WorkOutline, Event,  School,AccountCircle
  } from '@mui/icons-material';

const LeftBar = ()=>{
    return (
        <div className="left">
            <div className= "leftwrap">
            <ul className="leftbarList">
          <li className="leftbarListItem">
            <RssFeed className="leftbarIcon" />
            <span className="leftbarItemText">Feed</span>
          </li>
          <li className="leftbarListItem">
            <Chat className="leftbarIcon" />
            <span className="leftbarItemText">Chats</span>
          </li>
          <li className="leftbarListItem">
            <PlayCircleFilledOutlined className="leftbarIcon" />
            <span className="leftbarListItemText">Videos</span>
          </li>
          <li className="leftbarListItem">
            <Group className="leftbarIcon" />
            <span className="leftbarItemText">Groups</span>
          </li>
          <li className="leftbarListItem">
            <Bookmark className="leftbarIcon" />
            <span className="leftbarItemText">Bookmarks</span>
          </li>
          <li className="leftbarListItem">
            <HelpOutline className="leftbarIcon" />
            <span className="leftbarListItemText">Questions</span>
          </li>
          <li className="leftbarListItem">
            <WorkOutline className="leftbarIcon" />
            <span className="leftbarListItemText">Jobs</span>
          </li>
          <li className="leftbarListItem">
            <Event className="leftbarIcon" />
            <span className="leftbarListItemText">Events</span>
          </li>
          <li className="leftbarListItem">
            <School className="leftbarIcon" />
            <span className="leftbarListItemText">Courses</span>
          </li>
        </ul>
        <button className="leftbarButton">Show More</button>
        <hr className="leftbarHr" />
        <ul className="leftbarFriendList">
       <li className="leftbarFriend">
           <AccountCircle className="leftbarFriendIcon"/>
           <span className="leftbarFriendName">Aman</span>
       </li>
       <li className="leftbarFriend">
           <AccountCircle className="leftbarFriendIcon"/>
           <span className="leftbarFriendName">Aman</span>
       </li>
       <li className="leftbarFriend">
           <AccountCircle className="leftbarFriendIcon"/>
           <span className="leftbarFriendName">Aman</span>
       </li>
       <li className="leftbarFriend">
           <AccountCircle className="leftbarFriendIcon"/>
           <span className="leftbarFriendName">Aman</span>
       </li>
       <li className="leftbarFriend">
           <AccountCircle className="leftbarFriendIcon"/>
           <span className="leftbarFriendName">Aman</span>
       </li>
        </ul>
        
        </div>
        </div>
    )
    
}

export default LeftBar
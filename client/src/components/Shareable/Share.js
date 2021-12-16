import './Share.css'
import {PermMedia,Label,Room,EmojiEmotions} from "@mui/icons-material"
import { AuthContext } from '../../context/AuthContext';
import {useContext} from 'react'

const Share = ()=> {
  const {user} = useContext(AuthContext)
  console.log(user)
    return (
      <div className="share">
        <div className="shareWrap">
          <div className="shareTop">
            <img className="shareImg" src="/assets/me.jpg" alt="" />
            <input
              placeholder="What's in your mind" 
              className="shareInp"
            />
          </div>
          <hr className="shareHr"/>
          <form className="shareBottom">
              <div className="shareOptions">
                  <div className="shareOption">
                      <PermMedia htmlColor="tomato" className="shareIcon"/>
                      <span className="shareOptionText">Photo or Video</span>
                  </div>
                  <div className="shareOption">
                      <Label htmlColor="blue" className="shareIcon"/>
                      <span className="shareOptionText">Tag</span>
                  </div>
                  <div className="shareOption">
                      <Room htmlColor="green" className="shareIcon"/>
                      <span className="shareOptionText">Location</span>
                  </div>
                  <div className="shareOption">
                      <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                      <span className="shareOptionText">Feelings</span>
                  </div>
              </div>
              <button className="shareButton">Share</button>
          </form>
        </div>
      </div>
    );
  }


  export default Share
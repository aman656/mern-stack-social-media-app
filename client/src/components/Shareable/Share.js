import './Share.css'
import {PermMedia,Label,Room,EmojiEmotions} from "@mui/icons-material"

const Share = ()=> {
    return (
      <div className="share">
        <div className="shareWrap">
          <div className="shareTop">
            <img className="shareImg" src="/assets/me.jpg" alt="" />
            <input
              placeholder="What's in your mind Aman?"
              className="shareInp"
            />
          </div>
          <hr className="shareHr"/>
          <div className="shareBottom">
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
          </div>
        </div>
      </div>
    );
  }


  export default Share
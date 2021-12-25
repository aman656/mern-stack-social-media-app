import { useState, useEffect } from "react";
import "./allchat.css";
import axios from "axios";

const Allchat = ({ chatting, user: curr }) => {
  const [user, setUser] = useState(null);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  useEffect(() => {
    const single = chatting.members.find((s) => s !== curr._id);
    const another = async () => {
      try {
        const res = await axios.get("/users?id=" + single);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    another();
  }, [chatting, curr._id]);
  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src={user?.profilePicture ? PF + user.profilePicture : PF + "no1.jpg"}
        alt="person"
      />
      <span className="conversationName">{user ? user.name : "Aman"}</span>
    </div>
  );
};

export default Allchat;

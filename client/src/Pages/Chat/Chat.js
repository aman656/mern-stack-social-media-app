import Navbar from "../../components/Navbar/Navbar";
import "./Chat.css";
import { useState, useEffect, useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import Allchat from "../../components/chats/allchat";
import Message from "../../components/message/Message";
import { io } from "socket.io-client";

const Chat = () => {
  const { user } = useContext(AuthContext);
  const [chats, setChats] = useState([]);
  const [currchat, setcurrchat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [just, setJust] = useState(null);
  const socketRef = useRef();

  const messageRef = useRef();
  const viewRef = useState();
  useEffect(() => {
    socketRef.current = io("http://localhost:8800");
    socketRef.current.on("sent", (data) => {
      setJust({
        sender: data.sender,
        message: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    just &&
      currchat?.members.includes(just.sender) &&
      setMessages((prev) => [...prev, just]);
  }, [just, currchat]);
  useEffect(() => {
    socketRef.current.emit("sending", user._id);
    socketRef.current.on("getting", (added) => {
      console.log(added);
    });
  }, [user]);
  useEffect(() => {
    const fetching = async () => {
      try {
        const res = await axios.get("/chat/" + user._id);
        setChats(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetching();
  }, [user._id]);
  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("/message/" + currchat?._id);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currchat]);
  const submitHandler = async () => {
    const reciever = currchat.members.find((mem) => mem !== user._id);
    socketRef.current.emit("messagesending", {
      sender: user._id,
      reciever: reciever,
      text: messageRef.current.value,
    });

    const whole = {
      sender: user._id,
      chatid: currchat._id,
      message: messageRef.current.value,
    };
    try {
      const newOne = await axios.post("/message", whole);
      setMessages([...messages, newOne.data]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    viewRef.current?.scrollIntoView({ behaviour: "smooth" });
  }, [messages, viewRef]);
  return (
    <>
      <Navbar />
      <div className="chat">
        <div className="menu">
          <div className="menuWrapper">
            <input placeholder="Search for friends" className="menuInput" />
            {chats.map((ch) => (
              <div onClick={() => setcurrchat(ch)}>
                <Allchat chatting={ch} user={user} />
              </div>
            ))}
          </div>
        </div>
        <div className="box">
          <div className="boxWrapper">
            {currchat ? (
              <>
                {" "}
                <div className="boxTop">
                  {messages.map((m) => (
                    <div ref={viewRef}>
                      <Message message={m} mine={m.sender === user._id} />
                    </div>
                  ))}
                </div>
                <div className="boxBottom">
                  <textarea
                    className="messageInput"
                    placeholder="write something..."
                    ref={messageRef}
                  ></textarea>
                  <button className="submitButton" onClick={submitHandler}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="noConversationText">
                Open a conversation to start a chat.
              </span>
            )}
          </div>
        </div>
        <div className="online">
          <div className="onlineWrapper"></div>
        </div>
      </div>
    </>
  );
};

export default Chat;

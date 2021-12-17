import './SignUp.css'
import {Link} from 'react-router-dom'
import {useRef} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function SignUp() {
  const nameRef = useRef()
  const emailRef = useRef()
  const passRef = useRef()
  const againRef = useRef()
  const navigate = useNavigate()

  const submitHandler = async(event)=>{
    event.preventDefault()
    if(passRef.current.value !== againRef.current.value){
      againRef.current.setCustomValidity("passwords didn't match")
    }else{
      const user = {
        name:nameRef.current.value,
        email:emailRef.current.value,
        password:passRef.current.value
      }
      try{
        axios.post("/auth/register",user)
        navigate('/login')
        

      }catch(err){
        console.log(err)

      }
    }
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">MetaUp</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Meta Social.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={submitHandler}>
            <input placeholder="Username" className="loginInput" type={"text"} required ref={nameRef} />
            <input placeholder="Email" className="loginInput" type={"email"} required ref={emailRef} />
            <input placeholder="Password" className="loginInput" type={"password"} required ref={passRef} />
            <input placeholder="Password Again" className="loginInput" type={"password"} required ref={againRef} />
            <button className="loginButton">Sign Up</button>
            <Link to={"/login"}><button className="loginRegisterButton">
              Log into Account
            </button></Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp
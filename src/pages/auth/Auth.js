import React, { useState } from "react";
import "./auth.css";
import Logo from "../../img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { login, signUp } from "../../actions/AuthAction";

function Auth() {

  const dispatch = useDispatch()
  const loading =useSelector((state)=>state.authReducer.loading)
  const [isSignUp, setIsSignUp] = useState(true);

console.log(loading);

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    password: "",
    confirmpass: "",
    username: "",
  });

  const [confirmpass, setConfirmPass] = useState(true);

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

const handleSubmit=(e)=>{
    e.preventDefault();

    if(isSignUp){
       data.password === data.confirmpass ? dispatch(signUp(data)) : setConfirmPass(false)
    }
    else{
        dispatch(login(data));
    }
}

const resetForm =()=>{
    setConfirmPass(true)
    setData({firstname: "",
    lastname: "",
    password: "",
    confirmpass: "",
    username: "",})
}
  return (
    <>
      <div className="auth">
        {/* Left side */}
        <div className="a-left">
          <img src={Logo} alt="logo" />
          <div className="webName">
            <h1>Social Media</h1>
            <h6>Explore the ideas throughout the world</h6>
          </div>
        </div>

        <h1>
          {/* Right side */}
          <div className="a-right">
            <form className="infoForm authForm" onSubmit={handleSubmit}>
              <h3>{isSignUp ? "Sign up" : "Log In"}</h3>

              {isSignUp && (
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="infoInput"
                    name="firstname"
                    onChange={handleChange}
                    value={data.firstname}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="infoInput"
                    name="lastname"
                    onChange={handleChange}
                    value={data.lastname}
                  />
                </div>
              )}

              <div>
                <input
                  type="text"
                  placeholder="User Name"
                  className="infoInput"
                  name="username"
                  onChange={handleChange}
                  value={data.username}
                />
              </div>

              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="infoInput"
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                />
                {isSignUp && (
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="infoInput"
                    name="confirmpass"
                    onChange={handleChange}
                    value={data.confirmpass}
                  />
                )}
              </div>

              <span
                style={{
                  display: confirmpass ? "none" : "block",
                  color: "red",
                  fontSize: "12px",
                  alignSelf: "flex-end",
                  marginRight: "5px",
                }}
              >
                * Confirm Password is not same
              </span>

              <div>
                <span
                  style={{ fontSize: "12px", cursor: "pointer" }}
                  onClick={() =>{ setIsSignUp((prev) => !prev); resetForm()}}
                >
                  {isSignUp
                    ? "Already have an account Login!"
                    : "Don't have an account? Sign Up"}
                </span>
              </div>
              <button className="button infoButton" type="submit" disabled={loading}>
                {loading ? "Loading..." : isSignUp ? "Sign Up" : "Login"}
              </button>
            </form>
          </div>
        </h1>
      </div>
    </>
  );
}

export default Auth;

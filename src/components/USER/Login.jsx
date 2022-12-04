import React, { useState,useContext } from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
import { UserContext } from '../../context-api/User';
import {fetchReqPOST1} from '../../clintside';
const END_POINT = "http://localhost:4000/user/login/";
function Login() {
    const [user,setUser] = useContext(UserContext);
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');


    const handleLogin = e => {
        e.preventDefault();
        try{
            fetchReqPOST1(END_POINT,{
                username : userName,
                password:password
            }).then(res=>res.data)
            .then(res=>{
                // console.log(res.data.token);
                setUser({
                    isLogin : true,
                    info:{
                        userName : userName,
                        email : userName,
                        password : password,
                        token : "Bearer "+res.data.token
                    }
                })
                alert(res.message);
            })    
        }catch(err){
            // console.log("err")
            alert("Error")
        }
        setUserName('');
        setPassword('');
        // alert("Successfully Login!!");
    }
  return (
        <div className="login text-center m-5-auto">
          <h2>Sign in to us</h2>
          <form>
              <p>
                  <label>Username or email address</label><br/>
                  <input value={userName} onChange={(e)=>setUserName(e.target.value)} type="text" name="first_name" required />
              </p>
              <p>
                  <label>Password</label>
                  <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                  <br/>
                  <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name="password" required />
              </p>
              <p>
                  <button onClick={handleLogin} id="sub_btn" type="submit">Login</button>
              </p>
          </form>
          <footer>
              <p>First time? <Link to="/register">Create an account</Link>.</p>
          </footer>
      </div> 
  )
}

export default Login
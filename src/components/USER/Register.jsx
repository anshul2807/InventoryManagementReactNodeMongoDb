import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import "./Register.css"
import { fetchReqPOST1 } from '../../clintside';
const END_POINT = "http://localhost:4000/user/register/";


function Register() {
    const [userName,setUserName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const handleRegister = (e) => {
        e.preventDefault();
        
        try {
            fetchReqPOST1(END_POINT,{
                username : userName,
                email : email,
                password : password
            }).then(res=>{
                alert("Successfully Register!!");
            })
        }catch(err){
            alert("Error in Register!!");
        }

        setUserName('');
        setEmail('');
        setPassword('');
        
    }
  return (
    <div className="register text-center m-5-auto">
            <div className="heading">
              <h2>Join us</h2>
              <h5>Create your personal account</h5>
            </div>
            <form>
                <p>
                    <label>Username</label><br/>
                    <input value={userName} onChange={(e)=>setUserName(e.target.value)} type="text" name="first_name" required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name="password" required />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="/">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" onClick={handleRegister}>Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Sign In page</Link>.</p>
            </footer>
        </div>
  )
}

export default Register
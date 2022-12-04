import React,{useContext,useState} from 'react'
import { UserContext } from '../../context-api/User';
import "./Profile.css"
import {fetchReqPUT1} from "../../clintside"

const END_POINT = "http://localhost:4000/user/update";

function Profile() {
  const [user,setUser] = useContext(UserContext);
  const [edit,setEdit] = useState(false);
  const [userName,setUserName]=useState(user.info.userName);
  const [email,setEmail]=useState(user.info.email);
  const [password,setPassword]=useState(user.info.password);
  
  const handleSave = (e) => {
    e.preventDefault();
    // setUser({
    //   ...user ,
    //   info : {
    //     email : email,
    //     password : password,

    //   }
    // })
    // console.log(user.info.token);
    try {
      fetchReqPUT1(END_POINT,user.info.token,{
        email : email,
        password : password
      }).then(res=>{
        console.log("Successfully Updated")
      })
    }catch(err){
      console.log("Error while Updating Profile");
    }


    setEdit(!edit);
  }
  return (
    <div className='profile'>
      <div className="profile-1">
        <label>Username</label>
        <input value={userName} onChange={(e)=>setUserName(e.target.value)}/>
      </div>
      <div className="profile-2">
        <label>Email</label>
        <input disabled={!edit} value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <div className="profile-3">
        <label>Password</label>
        <input disabled={!edit} value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </div>
      <div className="profile-4">
        <button className='btn edit' onClick={()=>setEdit(!edit)}>Edit</button>
        <button className='btn save' onClick={handleSave}>Save</button>
      </div>
      
    </div>
  )
}

export default Profile
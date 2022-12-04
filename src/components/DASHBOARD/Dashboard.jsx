import React, {  useState } from 'react'
import "./Dashboard.css"
import Dashboard_body from './Dashboard_body';

function Dashboard() {
  const [option,setOption]=useState(1);
  const handleSetOption = (val)=> {
    setOption(val);
  }
  
  return (
    <div className='dashboard'>
        <div className="dashboard_navbar">
          <h1>Inventory</h1>
          <ul>
            <li onClick={()=>handleSetOption(1)}>Profile</li>
            <li className='dashboard_additem' onClick={()=>handleSetOption(2)}>Add Items</li>
            <li onClick={()=>handleSetOption(3)}>Items</li>
            <li onClick={()=>handleSetOption(4)}>Categories</li>
            <li className='logout'>Logout</li>
          </ul>
        </div>
        <Dashboard_body option={option}/>
    </div>
  )
}

export default Dashboard
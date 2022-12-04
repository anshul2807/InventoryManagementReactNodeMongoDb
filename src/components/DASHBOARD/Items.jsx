import React,{useContext, useEffect, useState} from 'react'
import { CategoriesContext } from '../../context-api/Categories';
import { ItemsContext } from '../../context-api/Items';
import "./Items.css"
import {fetchReqDELETE1} from "../../clintside"
import { UserContext } from '../../context-api/User';
const END_POINT = "http://localhost:4000/product/removeitem/";

function Items() {
  const [user,setUser]=useContext(UserContext);
  const [items,setitems] = useContext(ItemsContext)
  const [totalItems,setTotalItems]=useState(items);
  
  const [categories,setCategories] = useContext(CategoriesContext);
  // useEffect(()=>{
  //   setTotalItems(items);
  // },[items])
  const handleFiltre = (e) => {
    const value = e.target.value;
    if(value == "all") {
      setTotalItems(items)
      return;
    }
    setTotalItems(items.filter(item => item.category == value))
  }
  const handleItemDelete = (e)=>{
    const item_id = e.currentTarget.id;
    try {
      fetchReqDELETE1(END_POINT+item_id,user.info.token).then(res=>{
        const newItem = totalItems.filter(item => item.id !== item_id);
        setitems(newItem);
        setTotalItems(newItem);
        console.log(newItem);
        console.log("Successfull Deleted the Item");
      })
    } catch (error) {
      console.log("Error while deleting the Item");
    }
  }
  return (
    <div className='items'>
        <div className="items-1">
          <label>Filter By Category</label>
          <select onClick={handleFiltre}>
            <option value="all">All</option>
            {categories.map(category => (
              <option value={category.categoryname}>{category.categoryname}</option>
            ))}
          </select>
        </div>
        <div className="items-2">
          <table>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            {totalItems.map(item =>{
              return (
              <>
                <tr>
                  <td>{item.productName}</td>
                  <td><span>$</span>{item.productPrice}</td>
                  <td>{item.category}</td>
                  <td id={item.id}><a href="#">EDIT</a></td>
                  <td id={item.id} onClick={handleItemDelete}><a href="#">DELETE</a></td>
                </tr>
              </>
              );
            })}
          </table>
        </div>
    </div>
  )
}

export default Items
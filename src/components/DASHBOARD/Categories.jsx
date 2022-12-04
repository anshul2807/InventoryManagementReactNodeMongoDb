import React,{useState,useContext} from 'react'
import { CategoriesContext } from '../../context-api/Categories';
import {fetchReqPOST3,fetchReqDELETE1} from "../../clintside"
import "./Categories.css";
import { UserContext } from '../../context-api/User';
import { ItemsContext } from '../../context-api/Items';
const END_POINT = "http://localhost:4000/product/addcategory";
const END_POINT2="http://localhost:4000/product/removecategory/";
function Categories() {
  const [categories,setCategories]=useContext(CategoriesContext);
  const [items,setitems]=useContext(ItemsContext)
  const [input,setInput]=useState('');
  const [user,setUser]=useContext(UserContext);
  const handleAddCategories = (e) => {
    e.preventDefault()
    
    try{
      fetchReqPOST3(END_POINT,user.info.token,{
        categoryname:input
      })
      .then(res=>res.data.data)
      .then(res=>{ 
        console.log(res)
        setCategories([...categories,{
          id : res._id,
          categoryname : input
        }]);
          console.log("Successfully Created the Categories");
      })
    }catch(err){
      console.log("Error while creating the Categories");
    }

    setInput('')
  }
  const handleDeleteCategory = (e)=>{
    const cate_id = e.currentTarget.id;
    try {
      fetchReqDELETE1(END_POINT2+cate_id,user.info.token).then(res=>{
        let cateName="";
        categories.map(c => {
          if(c.id == cate_id)cateName=c.categoryname;
        })
        console.log("CategoryName -> ",cateName);
        const newItem = items.filter(item => item.categoryname !== cateName);
        const newCat = categories.filter(category => category.id !== cate_id)
        setCategories(newCat);
        setitems(newItem);
        console.log(newItem);
        console.log("Successfull Deleted the Item");
      })
    } catch (error) {
      console.log("Error while deleting the Item");
    }
  }
  return (
    <div className='categories'>
      <div className="categories-1">
        <label htmlFor='category'>Add a Category</label>
        <input type="text" name="category" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button className="btn" onClick={handleAddCategories}>Add</button>
      </div>
      <div className="categories-2">
        <table>
              <tr>
                <th>Category Name</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
              {categories.map(categorie =>{
                return (
                <>
                  <tr>
                    <td>{categorie.categoryname}</td>
                    <td id={categorie.id}><a href="#">EDIT</a></td>
                    <td onClick={handleDeleteCategory} id={categorie.id}><a href="#">DELETE</a></td>
                  </tr>
                </>
                );
              })}
            </table>
      </div>
    </div>
  )
}

export default Categories
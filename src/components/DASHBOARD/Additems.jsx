import React, { useContext,useState } from 'react'
import { ItemsContext } from '../../context-api/Items'
import {CategoriesContext} from '../../context-api/Categories'
import "./Additems.css"
import { UserContext } from '../../context-api/User';
import {fetchReqPOST3} from "../../clintside"

const END_POINT = "http://localhost:4000/product/additems";

function Additems() {
  const [user,setUser] = useContext(UserContext);
  const [items,setItems] = useContext(ItemsContext);
  const [categories,setCategories]=useContext(CategoriesContext);

  const[productName,setProductName]=useState('');
  const[productPrice,setProductPrice]=useState('');
  const [categoryValue,setCategoryValue]=useState('');

  const handleAddProduct = (e) => {
    e.preventDefault();

    try {
      fetchReqPOST3(END_POINT,user.info.token,{
        itemname:productName,
        itemprice:productPrice,
        categoryname:categoryValue
      }).then(res=>res.data.data)
      .then(res=>{
        console.log(res);
            setItems([...items,{
              id :res._id,
          category : categoryValue,
          productName : productName,
          productPrice : productPrice
        }])
          console.log("Successfully Created!!");
      }) 
    }catch(err){
      console.log("Error While Creating the Item");
    }

  }
  return (
    <div className='additems'>
      <div className="additems-1">
        <h1>Add A New Item</h1>
      </div>
      <div className="additems-2">
        <div className="additems-2__category">
          <label htmlFor='category'>Category</label>
          <select className="category" onChange={(e)=>{
            setCategoryValue(e.target.value);
          }}>
            <option value="all"></option>
            {categories.map(category => (
              <option value={category.categoryname}>{category.categoryname}</option>
            ))}
          </select>
        </div>
        <div className="additems-2__pname">
          <label htmlFor='pname'>Product Name</label>
          <input type="text" name="pname" value={productName} onChange={e=>setProductName(e.target.value)}/>
        </div>
        <div className="additems-2__pprice">
          <label htmlFor='pprice' >Product Price</label>
          <input type="number" name="pprice" value={productPrice} onChange={e=>setProductPrice(e.target.value)}/>
        </div>
      </div>
      <div className="additems-3">
        <button className='btn add_product' onClick={handleAddProduct}>Add Product</button>
      </div>
    </div>
  )
}

export default Additems
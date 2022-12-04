import React,{useContext,useEffect} from 'react'
import Profile from "./Profile"
import Additems from "./Additems"
import Items from "./Items"
import Categories from "./Categories"
import { fetchReqGET1 } from '../../clintside';
import { ItemsContext } from '../../context-api/Items';
import { CategoriesContext } from '../../context-api/Categories';
import { UserContext } from '../../context-api/User';
const END_POINT1="http://localhost:4000/product/items";
const END_POINT2="http://localhost:4000/product/category";

function Dashboard_body({option}) {
  const [user,setUser]=useContext(UserContext);
  const [items,setitems] = useContext(ItemsContext);
  const [categories,setCategories] = useContext(CategoriesContext);
  useEffect(()=>{
      try {
          fetchReqGET1(END_POINT1,user.info.token)
          .then(res=>res.data.data)
          .then(res=>{
              // console.log(res);
             let newItem=[]
              res.map(item=>{
                newItem.push({
                  id : item._id,
                  category : item.categoryname,
                  productName : item.itemname,
                  productPrice : parseInt(item.itemprice)
                });
              })

              setitems(newItem);
          })

          fetchReqGET1(END_POINT2,user.info.token)
          .then(res=>res.data.data)
          .then(res=>{
            let newCat=[];
            res.map(category=>{
              console.log(category.categoryname);
              newCat.push({id:category._id,categoryname : category.categoryname});
            })

            setCategories(newCat)

          })
      }catch(err){
          console.log("error While fetching the Items Or Categories!!");
      }

  },[])
  return (
    
      <>
      {
        option === 2 ? <Additems />:
        option === 3 ? <Items />:
        option === 4 ? <Categories />:
        <Profile /> 
      }
      </>
    
  )
}

export default Dashboard_body
import React ,{ createContext, useState} from 'react'

export const ItemsContext = createContext();

export const ItemsProvider = (props)=> {
    const [items,setitems]=useState([
        // {
        //   id : 1,
        //   category : "Dress",
        //   productName : "Tshirt",
        //   productPrice : 45
        // }
      ]);
    return (
        <ItemsContext.Provider value={[items,setitems]}>
            {props.children}
        </ItemsContext.Provider>
    );
}
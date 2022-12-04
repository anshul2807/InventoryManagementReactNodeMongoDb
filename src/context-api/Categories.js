import React ,{ createContext, useState} from 'react'

export const CategoriesContext = createContext();

export const CategoriesProvider = (props)=> {
    const [categories,setCategories] = useState([]);
    return (
        <CategoriesContext.Provider value={[categories,setCategories]}>
            {props.children}
        </CategoriesContext.Provider>
    );
}
import React, { useState, createContext } from "react";
import Axios from "./Axios";
import ComponentC from './ComponentC' ;
import Count from "./Count";
import Display from "./Display";
import Formik from "./Formik";
import Localstroge from './Localstorge'
import Pagination from "./Pagination";
import TableDat from "./TableDat";

export const store=createContext();
 function App() {
  const [data,setData]=useState([
    {brandName:'Maruti'},
    {brandName:'Samsung'},
    {brandName:'Celkon'}
  ])
  
  return(
    <div>
   <store.Provider value={[data,setData]}>
   <Display/>
     <Count/>
  
     </store.Provider>
    </div>
  )
}
export default App;

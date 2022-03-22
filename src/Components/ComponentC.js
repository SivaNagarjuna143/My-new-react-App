import React, { createContext, useState } from 'react';
import ComponentB from './ComponentB';
import ComponentA from './ComponentA'
 export const store=createContext();

export default function ComponentC() {
const [count,setCount]=useState(0);
  return(
      <div>
          <store.Provider value={[count,setCount]}>
     <center>
      <ComponentA />
      <ComponentB/>
      <button className='btn btn-primary' onClick={()=>setCount(count+1)}>Increment</button>
      <button className='btn btn-danger' onClick={()=>setCount(count-1)}>Decrement</button>
      </center>
      </store.Provider>
      </div>
  )
}

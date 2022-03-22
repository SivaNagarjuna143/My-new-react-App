import React from 'react';
import { useContext } from 'react';
 import {store} from './ComponentC';
const ComponentA = () => {
    const [count,setCount]=useContext(store)
  return (
      <div  className='card'>
          <div className='card-body'>
          ComponentA:{count}
      </div>
      </div>
  )
};

export default ComponentA;

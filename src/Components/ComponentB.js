import React from 'react';
import { useContext } from 'react';
import { store } from './ComponentC';
const ComponentB = () => {
    const [count,setCount]=useContext(store)
  return (
      <div  className='card'>
          <div className='card-body'>
            
          ComponentB:{count}
          </div>
      </div>
  )
};

export default ComponentB;

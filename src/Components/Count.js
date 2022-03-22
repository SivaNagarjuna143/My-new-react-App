import React, { useContext, useState } from 'react'
import {store} from './App'

function Count() {
  const [data,setData]=useContext(store);
  const [name,setName]=useState('');
  const submitHandler=(e)=>{
    e.preventDefault();
 setData([...data,{brandName:name}])
  }
  const deleteHandler=(event,indexValue)=>{
    let newData=data.filter((index)=>index!==indexValue);
    setData(newData)
  }
  return (
    <div>
      {data.map((item,index)=><h2 key={index}>{item.brandName}<button className='btn btn-danger' onClick={(event)=>deleteHandler(event,item,index)}>Delete</button></h2>)}
      <form onSubmit={submitHandler}>
        <input type='text'   onChange={(e)=>setName(e.target.value)}/>&nbsp;
        <button>Add</button>
      </form>
    </div>
  )
}

export default Count
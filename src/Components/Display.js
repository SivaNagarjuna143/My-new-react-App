import React, { useContext } from 'react'
import { store } from './App';

function Display() {
  const [data,setData]=useContext(store)
  return (
    <div>Display::{data.length}</div>
  )
}

export default Display
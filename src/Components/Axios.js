import React,{useEffect, useState} from 'react'
import axios from 'axios';


function Axios() {
    const LOCAL_DATA="data"
const[data,setData]=useState([]);
    useEffect(()=>{
axios.get('https://jsonplaceholder.typicode.com/users').then(res=>setData(res.data))
    },[]);
    useEffect(()=>{
       const myData= JSON.parse(localStorage.getItem(LOCAL_DATA));
       if(myData) setData(myData)
    },[]);
    useEffect(()=>{
        localStorage.setItem(LOCAL_DATA,JSON.stringify(data))
    },[data]);
  return (
    <div>
        <table className='table table-hover'>
            <tr>
            <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Address</th>
                <th>Suite</th>
                <th>City</th>
            </tr>
            <tbody>
                {data.map((item)=>
                <tr>
                    <td key={item.id}>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.address.street}</td>
                    <td>{item.address.zipcode}</td>
                    <td>{item.address.suite}</td>
                    <td>{item.address.city}</td>
                </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default Axios
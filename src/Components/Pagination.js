import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PageButtton from './PageButtton';

function Pagination() {
    const[data,setData]=useState([]);
    const [page,setPage]=useState([]);
    useEffect(()=>{
axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{setData(res.data);setPage(res.data.slice(0,10))})
    },[]);
    const pageHandler=(pageNumber)=>{
        setPage(data.slice((pageNumber*10)-10,pageNumber*10))
    }
  return (
    <div>
        {/* <table className='table table-hover'>
            <tr>
                <th>ID</th>
                <th>UserID</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
            <tbody>
                {data.map(item=>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.userId}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                    </tr>
                    )}
            </tbody>
        </table>
        <br/>
        <PageButtton data={data} pageHandler={pageHandler}/> */}
    
{data.length>=1?
<div>
    {page.map(item=><div style={{border:'1px solid red',margin:'3px'}}>{item.title}</div>)}<br/>
<PageButtton data={data} pageHandler={pageHandler}/>
</div>
:<p>Data Not Loaded</p>
}
    
    </div>
  )
}

export default Pagination
import React ,{useEffect, useState}from "react";

const Login = () =>{
    const LOCAL_DATA="data";
    const [data,setData]=useState({
        username:'',
      email:'',
    });
    const {username,email}=data;
    const changeHandler = e =>{
setData({...data,[e.target.name]:e.target.value})
    };
    const submitHandler = e =>{
        e.preventDefault();
        
    }
    useEffect(()=>{
const myData=JSON.parse(localStorage.getItem(LOCAL_DATA));
if(myData) setData(myData)
           },[])
   useEffect(()=>{
localStorage.setItem(LOCAL_DATA,JSON.stringify(data))
   },[data])
    
    return(
<div>
    <form onSubmit={submitHandler}>
        <input type="text" name="username" value={username} onChange={changeHandler}/><br></br>
        <input type="text" name="email" value={email}  onChange={changeHandler}/><br></br>
        <input type="submit" name="submit"/>
    </form>
  
</div>    
    )
}
export default Login;
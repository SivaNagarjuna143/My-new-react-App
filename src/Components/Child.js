import React,{useReducer} from "react";
const initialstate={
  count:0
}
function reducer(state,action){
  switch(action.type){
    case 'Increment':
      return {count:state.count+1}
      case 'Decrement':
        return {count:state.count-1}
        default:
  }
}

const Child = () => {
  const [state,action]=useReducer(reducer,initialstate)
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=>dispatch({type:"Increment"})}>+</button>
      <button onClick={()=>dispatch({type:"Decrement"})}>-</button>
    </div>
  );
};
const fact=(n)=>{
  let a=1;
  for(var i=1;i>=n;i--){
    a=a*i;
  }
  console.log("Factioral Function Calling");
  return a;
}
export default Child;

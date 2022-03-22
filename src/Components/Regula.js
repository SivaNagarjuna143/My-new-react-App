 import React from 'react';
 

 class Regula extends React.Component{
     render(){
        console.log('######## RegularComponent');
         return(
<div>
 RegularComponent: {this.props.name}
</div>
         )
     }
 }
 export default Regula;
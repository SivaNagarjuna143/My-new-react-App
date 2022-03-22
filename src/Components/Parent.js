import React, { Component } from 'react';
import Regula from './Regula';
import Pure from './PureComponent'
export default class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'SivaNagarjuna'
      }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:'SivaNagarjuna'
            })
        },2000);
    }
    
  render() {
         console.log('######## Parent Component');
    return (
<div>
ParentComponent
<Regula name={this.state.name}/>
<Pure name={this.state.name}/>
</div>
    )
  }
}

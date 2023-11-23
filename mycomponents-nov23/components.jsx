import React, { Component } from 'react';
class Components extends Component {
    state = { 
        counter:0
     } 
     pressButton=()=>{
        console.log("Buttonpressed!");
        {this.setState({counter:this.state.counter+1})}
     }
    render() { 
        return (
            <div>
                <span className='badge bg-warning m-2'>{this.state.counter}</span>
                <button className='btn btn-success'onClick={this.pressButton}>Click</button>
            </div>
        );
    }
}
 
export default Components;
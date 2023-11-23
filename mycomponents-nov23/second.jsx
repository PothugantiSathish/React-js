import React, { Component } from 'react';
class Second extends Component {
    state = { 
        counter:0
    } 
    Increment=()=>{
        this.setState({counter:this.state.counter+1})
    }
    Decrement=()=>{
        this.setState({counter:this.state.counter-1})
    }



    render() { 
        return (
            <div>
                <span className='badge bg-warning m-2'>{this.state.counter}</span>
                <button className='btn btn-success'onClick={this.Increment}>+</button>
                <button className='btn btn-success m-2'onClick={this.Decrement}>-</button>

            </div>
        );
    }
}
 
export default Second;
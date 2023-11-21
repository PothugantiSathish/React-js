import React, { Component } from 'react';
class Color extends Component {
    state = { 
        counter:0
     } 
     get counterval(){
        if(this.state.counter==0) return "zero";
        else return this.state.counter;
        
     }

     
    render() { 
        return (
            <div>
            <div>
                <span className="badge bg-primary">Welcome to React js</span>
            </div>
            <div>
                 <span className="badge bg-primary">{this.state.counter}</span>
            </div>
            <div>
            <span className="badge bg-primary">{this.counterval}</span>
            </div>
            </div>
            
        );
    }
}
 
export default Color;
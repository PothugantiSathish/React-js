import React, { Component } from 'react';
class Example2 extends Component {
    state = { 
        count:50,
        tags:["tag1","tag2","tag3"]
     } 
    render() { 
        return (
        <div>
        second example
        <h1>Welcome to second Component</h1>
        {this.state.count}
        <ul>
            <li>{this.state.tags[0]}</li>
            <li>{this.state.tags[1]}</li>
            <li>{this.state.tags[2]}</li>
        </ul>
        <button>Click</button>
        </div>
        
       
        );
    }
}
 
export default Example2;
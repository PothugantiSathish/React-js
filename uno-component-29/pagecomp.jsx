import React, { Component } from 'react';
class Pagecomp extends Component {
    state = { 
        counter:this.props.pagevalue,
        course:this.props.course
     } 
    render() { 
        return (
            <div>
                <span className='badge bg-warning m-2'>{this.state.counter}</span>
                <span className='badge bg-success m-2'>{this.state.course}</span>
                <span className='badge bg-warning m-2'>{this.props.children}</span>
                <button className='btn btn-danger'>+</button>
            </div>
        );
    }
}
 
export default Pagecomp;    
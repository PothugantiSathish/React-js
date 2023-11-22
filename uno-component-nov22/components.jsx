import React, { Component } from 'react';
class Components extends Component {
    state = { 
        counter:0
     } 
     getBadgeDanger(){
        return "badge bg-danger"
     }
    render() { 
        const pVal="badge bg-warning"
        return (
            <div>
                <span className="badge bg-warning">{this.state.counter}</span>
                <span className="badge bg-success">success</span>
                <span className={pVal}>warning</span>
                <span className={this.getBadgeDanger()}>Danger</span>
            </div>
        );
    }
}
 
export default Components;
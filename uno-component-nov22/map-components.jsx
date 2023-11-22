import React, { Component } from 'react';
class Mycomponents extends Component {
    state = { 
        Cities:["Hyd","Bag","Delhi"]
     } 
    render() { 
        return (
            <div>
                {this.state.Cities.map(
                    cityName=><h1>cityName---{cityName}</h1>
                )}
            </div>

        );
    }
}
 
export default Mycomponents;
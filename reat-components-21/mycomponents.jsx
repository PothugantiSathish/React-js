import React, { Component } from 'react';
class Mycomponents extends Component {
    state = { 
     emps:  [
            {
                "id": 201,
                "name": "Sathish",
                "dept": "IT",
                "salary":35000
            },
            {
                "id": 202,
                "name": "Anil",
                "dept": "Sales",
                "salary":20000
            },
            {
                "id": 203,
                "name": "Naveen",
                "dept": "Admin",
                "salary":15000
            },
        ]
     } 
    
    render() { 
        return (
    <table className="table">
    <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Dept</th>
      <th scope="col">Salary</th>
    </tr>
    </thead>
   
    
    <tbody>
            {this.state.emps.map(eachemp=>
                
           <tr>
           <th scope="col">{eachemp.id}</th>
           <th scope="col">{eachemp.name}</th>
           <th scope="col">{eachemp.dept}</th>
           <th scope="col">{eachemp.salary}</th>
           </tr>)
    }
    </tbody>
    </table>       
        );
        
    }
}
 
export default Mycomponents ;
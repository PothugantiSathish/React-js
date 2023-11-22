import React, { Component } from 'react';
class Table extends Component {
    state = { 
        emps:[
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
            {
                "id": 203,
                "name": "Ram",
                "dept": "ceo",
                "salary":215000
            },
        ]
     } 
    render() { 
        return (
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">DEP</th>
                        <th scope="col">SALARY</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.emps.map(
                        emp=>
                        <tr>
                            <th scope="row">{emp.id}</th>
                            <td>{emp.name}</td>
                            <td>{emp.dept}</td>
                            <td>Rs-{emp.salary}/</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
}
 
export default Table;
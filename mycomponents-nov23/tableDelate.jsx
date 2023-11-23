import React, { Component } from 'react';
import employee from "../service/tableData"
class TableDelate extends Component {
    state = { 
        table:employee
    } 
    deleteEmployee = employee => {
        const filterEmployee = this.state.table.filter(
            eachemployee => eachemployee.id != employee.id)
        this.setState({table:filterEmployee})
    }
     
    render() { 
        return (
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">DEP</th>
                        <th scope="col">SALARY</th>
                        <th scope="col">ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.table.map(
                        emp=>
                        <tr>
                            <th scope="row">{emp.id}</th>
                            <td>{emp.name}</td>
                            <td>{emp.dept}</td>
                            <td>Rs-{emp.salary}/</td>
                            <td><button onClick={() =>this.deleteEmployee(emp)} className='btn btn-warning'>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
}
export default TableDelate;
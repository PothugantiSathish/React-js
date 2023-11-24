import React, { Component } from 'react';
import { getemployee } from '../Service/tabledata';
class Table extends Component {
    state = { 
        emplist:getemployee()
    } 
    TableDelete=id1=>{
        console.log("button clicked")
        const deletetable=this.state.emplist.filter(
        eachemployee=> eachemployee.id!=id1.id);
        this.setState({emplist:deletetable})
    }
    department=DEP=>{
        console.log("button clicked")
        const deletetable=this.state.emplist.filter(
        eachemployee=> eachemployee.dept=='IT');
        this.setState({emplist:deletetable})
    }
    Admin=DEP=>{
        console.log("button clicked")
        const deletetable=this.state.emplist.filter(
        eachemployee=> eachemployee.dept=='Admin');
        this.setState({emplist:deletetable})
    }
    ShowAll=()=>{
        console.log("button clicked")
        const deletetable=getemployee();
        this.setState({emplist:deletetable})
    }
    render() { 
        return (<div>
            <div>
                <button className='btn btn-primary'onClick={()=>this.department()}>IT</button>
                <button className='btn btn-primary m-2'onClick={()=>this.Admin()}>Admin</button>
                <button className='btn btn-primary m-2'onClick={()=>this.ShowAll()}>Refresh</button>
            </div>
    <table className="table table-warning">
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
                    {this.state.emplist.map(
                        emp=>
                        <tr>
                            <th scope="row">{emp.id}</th>
                            <td>{emp.name}</td>
                            <td>{emp.dept}</td>
                            <td>Rs-{emp.salary}/</td>
                            <td><button className='btn btn-primary'onClick={()=>this.TableDelete(emp)}>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
           
        );
    }
}
 
export default Table;
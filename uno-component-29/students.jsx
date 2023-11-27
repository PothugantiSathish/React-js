import React, { Component } from 'react';
import PagePagination from './pagePagination';
class Students extends Component {
    state = { 
        page:1,
            students:[
                {
                    "id":"101",
                    "name":"Anil",
                    "college":"Jntuh",
                    "marks":"72",
                    "fees":80000
                },
                {
                    "id":"102",
                    "name":"sathish",
                    "college":"SBIT",
                    "marks":"80",
                    "fees":"60000"
                },
                {
                    "id":"103",
                    "name":"Naveen",
                    "college":"MGIT",
                    "marks":60,
                    "fees":50000
                },
                {
                    "id":"104",
                    "name":"Viplav",
                    "college":"MLRD",
                    "marks":89,
                    "fees":40000
                },
                {
                    "id":"105",
                    "name":"Ram",
                    "college":"CBIT",
                    "marks":65,
                    "fees":75000
                },
                {
                    "id":"106",
                    "name":"Raj",
                    "college":"SBIT",
                    "marks":69,
                    "fees":85000
                },
                {
                    "id":"107",
                    "name":"Rajesh",
                    "college":"OU",
                    "marks":80,
                    "fees":95000
                },
            ]
     } 
    render() { 
        return (
            <div>
                <table class="table">
                    <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NAME</th>
                    <th scope="col">COLLEGE</th>
                    <th scope="col">MARKS</th>
                    <th scope="col">FEEAMOUNT</th>
                    </tr>


                    </thead>
                    <tbody>
                        {this.state.students.map(
                             eachstu=> <tr>
                            <th scope="row">{eachstu.id}</th>
                            <td>{eachstu.name}</td>
                            <td>{eachstu.college}</td>
                            <td>{eachstu.marks}</td>
                            <td>{eachstu.fees}</td>
                            </tr>
                                 )}
   
                    </tbody>
                </table>
                <PagePagination Totalstud={this.state.students.length}
                studperpage={this.state.page}/>

            </div>
          
        );
    }
}
 
export default Students;
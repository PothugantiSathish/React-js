import React, { Component } from 'react';
import _ from 'lodash';
import Pagepagination from './pagepagination';
import { getstudData } from './studentData';
class Student extends Component {
    state = {
        Allstu:getstudData(), 
        Page:4,
        currentPage:1,
    } 
    PageClick=eachRang=>{
        console.log(eachRang+"clicked....");
        this.setState({currentPage:eachRang})
    }
    pageFilterRecords() {
        const startIndex = ( this.state.currentPage - 1) * this.state.Page;
        return _(this.state.Allstu)
          .slice(startIndex)
          .take(this.state.Page)
          .value();
    }
    render() { 
    const Allstu=this.pageFilterRecords();
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
                       {Allstu.map(
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
               <Pagepagination TotalPerPage={this.state.Allstu.length}
                studperpage={this.state.Page}
                Handlepage={this.PageClick}
                />

            </div>

        );
    }
}
 
export default Student;
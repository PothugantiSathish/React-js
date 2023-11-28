import React, { Component } from 'react';
import _ from 'lodash';
class Pagepagination extends Component {
    state = {
        Allstuperpage:this.props.TotalPerPage,
        showperpage:this.props.studperpage
     } 
    render() { 
        const Totalpage=this.state.Allstuperpage/this.state.showperpage;
        const stuRang=_.range(1,Totalpage+1);
        return (
            <nav aria-label="page pagination example">
                <ul className="pagination">
                    {stuRang.map(
                        eachRang=>
                        <li class="page-item"><a class="page-link" 
                        onClick={()=>{this.props.Handlepage(eachRang)}}>{eachRang}</a></li>
                    )}
                    
                </ul>
            </nav>

        );
    }
}
 
export default Pagepagination;
import React, { Component } from 'react';
import _ from 'lodash'
class PagePagination extends Component {
    state = { 
        AllStud:this.props.Totalstud ,
        ShowPerPage:this.props.studperpage
     } 
    render() { 
        const totpages=this.state.AllStud/this.state.ShowPerPage 
        const stuRang=_.range(1,totpages+1);
        return (
            <nav aria-label="page example">
                <ul className="pagination">
                    {stuRang.map(
                        eachRang=>
                        <li class="page-item"><a class="page-link">{eachRang}</a></li>
                    )}
                    
                </ul>
            </nav>

        );
    }
}
 
export default PagePagination;
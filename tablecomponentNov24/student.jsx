import React, { Component } from 'react';
import { getstudent } from './stuData';

class Student extends Component {
    state = { 
        studentList:getstudent()
    } 
    studentsDelete=names1=>{
        console.log("button clicked")
        const Delete=this.state.studentList.filter(
        eachstudent=> eachstudent.name!=names1.name);
        this.setState({studentList:Delete})
    }
    mathsFailed=maths=>{
        console.log("button clicked")
        const Delete=this.state.studentList.filter(
        eachstudent=> eachstudent.maths<40);
        this.setState({studentList:Delete})
    }
    scienceFailed=science=>{
        console.log("button clicked")
        const Delete=this.state.studentList.filter(
        eachstudent=> eachstudent.science<40);
        this.setState({studentList:Delete})
    }
    socialFailed=social=>{
        console.log("button clicked")
        const Delete=this.state.studentList.filter(
        eachstudent=> eachstudent.social<40);
        this.setState({studentList:Delete})
    }
    AllSubjPass=()=>{
        console.log("button clicked")
        const Delete=this.state.studentList.filter(
        eachstudent=> eachstudent.maths>40&&eachstudent.science>40&&eachstudent.social>40);
        this.setState({studentList:Delete})
    }
    AllSubjFail=()=>{
        console.log("button clicked")
        const Delete=this.state.studentList.filter(
        eachstudent=> eachstudent.maths<40||eachstudent.science<40||eachstudent.social<40);
        this.setState({studentList:Delete})
    }
    ShowAll=()=>{
        console.log("button clicked")
        const Delete=getstudent();
        this.setState({studentList:Delete})
    }



    render() { 
        return (
            <div>
                <div>
                <button className='btn btn-primary'onClick={()=>this.mathsFailed()}>maths failed</button>
                <button className='btn btn-success m-2'onClick={()=>this.scienceFailed()}>science failed</button>
                <button className='btn btn-success m-2' onClick={()=>this.socialFailed()}>social failed</button>
                <button className='btn btn-success m-2' onClick={()=>this.AllSubjPass()}>AllPass</button>
                <button className='btn btn-success m-2' onClick={()=>this.AllSubjFail()}>AllFailed</button>
                <button className='btn btn-primary m-2' onClick={()=>this.ShowAll()}>Refresh</button>
                </div>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">NAME</th>
                        <th scope="col">MATHS</th>
                        <th scope="col">SCIENCE</th>
                        <th scope="col">SOCIAL</th>
                        <th scope="col">ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.studentList.map(
                        student=>
                        <tr>
                            <th scope="row">{student.name}</th>
                            <td>{student.maths}</td>
                            <td>{student.science}</td>
                            <td>{student.social}</td>
                            <td><button className='btn btn-primary' onClick={()=>this.studentsDelete(student)}>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
            </div>
            
        );
    }
}
export default Student;
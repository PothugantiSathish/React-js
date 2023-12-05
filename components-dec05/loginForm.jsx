import React, { Component } from 'react';
class LoginForm extends Component {
    state = { 
        AccountDetails:{
            name:"",
            password:""
        }
     } 
    handleSumbit = (s) =>{
        s.preventDefault();
        console.log("sumbit button pressed...");
        console.log("username---->"+this.state.AccountDetails.name);
        console.log("username---->"+this.state.AccountDetails.password);
    }
    handleChange = (v) =>{
        const AccountDetails={...this.state.AccountDetails};  
        AccountDetails[v.currentTarget.name]=v.currentTarget.value; // AccountDetails.name=v.currentTarget.value;
        this.setState({AccountDetails});
    }
    // handlePasswordChange = (h) =>{
    //   const AccountDetails={...this.state.AccountDetails};
    //    AccountDetails.password=h.currentTarget.value;
    //    this.setState({AccountDetails});
    //}
    render() { 
        return (
    <form onSubmit={this.handleSumbit}>
    <div>
    <label className="form-label">UserName</label>
    <input type="text" 
    onChange={this.handleChange}
    value={this.state.AccountDetails.name}
    className="form-control" 
    name="name"
    id="username"/>
    </div>

    <div className="mb-3">
    <label className="form-label">Password</label>
    <input type="password"
    onChange={this.handleChange}
    value={this.state.AccountDetails.password} 
    className="form-control"
    name="password" 
    id="exampleInputPassword1"/>
    </div>

    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
        );
    }
}
 
export default LoginForm;
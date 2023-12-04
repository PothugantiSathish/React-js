import React, { Component } from 'react';
class LoginForm extends Component {
    state = { 
        account:{
            username:"",
            password:""
        }
     } ;
    handleSubmit= (s) =>{
        s.preventDefault();
        console.log("account....username---->"+this.state.account.username);
        console.log("account....password--->"+this.state.account.password);
    }
    handleChange= (a) =>{
        const account={...this.state.account};
        account[a.currentTarget.name]=a.currentTarget.value;
        this.setState({account})
    }
    render() { 
        return (
<form onSubmit={this.handleSubmit}>
  <div class="form-group">
    <label for="exampleInputUsername">Username</label>
    <input onChange={this.handleChange}value={this.state.account.username}
     type="text" 
     class="form-control" 
     id="Username" 
     name="username"/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword">Password</label>
    <input onChange={this.handleChange}value={this.state.account.password} 
    type="password" 
    class="form-control" 
    id="Password" 
    name="password"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        );
    }
}
 
export default LoginForm;
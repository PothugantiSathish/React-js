import logo from './logo.svg';
import './App.css';
import NavBar from './components-dec04/navBar';
import { Route } from 'react-router-dom';
import Home from './components-dec04/home';
import About from './components-dec04/about';
import Contact from './components-dec04/contact';
import LoginForm from './components-dec04/loginForm';


function App() {
  return (
    <div>
      <NavBar/>
      <div>
        <Route path='/home' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/' component={LoginForm}/>
        
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Routing from './uno-components-Dec2/routing';
import {Route} from 'react-router-dom'
import Home from './uno-components-Dec2/home';
import Product from './uno-components-Dec2/product';
import Post from './uno-components-Dec2/post';
import Admin from './uno-components-Dec2/admin';


function App() {
  return (
    <div>
      <Routing/>
      <div className='content'>
      <Route path="/home" component={Home}/>
      <Route path="/products" component={Product}/>
      <Route path="/posts" component={Post}/>
      <Route path="/admin" component={Admin}/>
      </div>
      
    </div>
  );
}

export default App;

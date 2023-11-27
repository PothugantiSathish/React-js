
import './App.css';
import Pagecomp from './uno-component-29/pagecomp';
import Students from './uno-component-29/students';

function App() {
  return (
    <div>
     <Pagecomp pagevalue={100} course={"React"}>Sathish</Pagecomp>
    <Pagecomp pagevalue={101} course={"Java"}>Anil</Pagecomp>
    <Pagecomp pagevalue={102} course={"Html"}>Naveen</Pagecomp>
    <Pagecomp pagevalue={103} course={"Css"}>Viplav</Pagecomp>
   
    <Students/>
   </div>
  );
}

export default App;

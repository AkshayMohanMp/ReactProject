import { useState } from 'react';
import './App.css';
import FunctionalComponent from './Components/FunctionalComponent';
import ClassComponents from './Components/classComponents';

 function App() {
  const company ="AKMP";
  const [name, setName] = useState("AKshay")
  return (
    <div>
      <h1>Hello World !</h1>
      <FunctionalComponent name={name} age={27} company={company} setName={setName}/>
      {/* <FunctionalComponent/>
      <FunctionalComponent/>
      <FunctionalComponent/> */}
      <ClassComponents/>
    </div> 
    
  );
}

export default App;

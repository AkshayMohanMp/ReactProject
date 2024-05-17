import { useState } from 'react';
import './App.css';
import FunctionalComponent from './Components/FunctionalComponent';
import ClassComponents from './Components/classComponents';
import {Routes, Route} from "react-router-dom";

 function App() {
  const company ="AKMP";
  const [name, setName] = useState("AKshay")
  return (
    <Routes>
        <Route path = '/' element={<ClassComponents/>}/>
        <Route path = '/fun-comp' element={<FunctionalComponent/>}/>
    </Routes>
  );

}

export default App;

// Input the name age by using buttom

    // <div>
    //   <h1>Hello World !</h1>
      {/* <FunctionalComponent name={name} age={27} company={company} setName={setName}/> */}
      {/* <FunctionalComponent/>
      <FunctionalComponent/>
      <FunctionalComponent/> */}
      {/* <ClassComponents/> */}
    {/* </div>  */}
    

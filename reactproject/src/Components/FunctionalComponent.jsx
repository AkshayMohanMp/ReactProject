import React, {useState} from "react";


const FunctionalComponent =({name, age, company, setName})=>{
    // 1) const FunctionalComponent =(props)=>{
// function FunctionalComponent(){
    const [count, setCount] = useState(0);
    const[changeName, setChangeName]= useState("")

    // 1) const {name, age, company, setName} =props;
    return(
        <div>
            <p>This is an Functional components</p>
            <button onClick={() =>setCount(count+1)}>Click on me to Increment +1</button>
            <button onClick={() =>setCount(count-1)}>Click on me to Decrement -1</button>
            <h1>{count}</h1>
            <h1>my Name is {name} I am {age} and i work for {company}</h1>
            {/* 2) using using button */}
            {/* 2) <button onClick={()=> props.setName("AKshay Mohan MP")}>Change Name to AKshay Mohan MP </button> */}
            <input type="text" onChange={(e)=> setChangeName(e.target.value)}/>
            <button onClick={()=>setName(changeName)}>Change Name to AKshay Mohan MP </button>
        </div>
    )
}

export default FunctionalComponent;

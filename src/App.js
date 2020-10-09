import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Todoapplist from "./Components/Todoapplist.jsx";
const App=()=>{
  //For storing user inputs we use this useState
  const[inputs,setInputs]=useState("");
  //we are storing whatever user is typing  in an empty array
  const[list,setlist]=useState([]);
  /*onchange Event handler watches changes in input field.
  It triggers and call a func when user type anything in 
  input field . With event.target.value we can acess value typed by user*/
  const inputEvent=(event)=>{
console.log(event.target.value);
setInputs(event.target.value);
  };
  const onadd=()=>{
setlist((preVal)=>{
  return [...preVal,inputs];//we use spread operator 
});
setInputs(" ");
  };
return(
  <>
  <div className="main_div">
    <div className="center_div">
      <h1>TODO APP</h1>
      <br/>
      <input type="text" value={inputs} placeholder="Add A Task"
      onChange={inputEvent}/>
      <Button  onClick={onadd} className="new_Btn">
      <AddIcon/>
      </Button>
      <br/>
      <ul>
      {
        //Array.map((value,index)=>{})
        list.map((Val,index)=>{
        return <Todoapplist text={Val} key={index} id={index}/>
        })
      }
      </ul>

    </div>
  </div>
  </>
)
};
export default App;
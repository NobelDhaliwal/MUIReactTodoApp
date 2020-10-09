import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import { useState } from "react";
const  Todoapplist=(props)=>{
    const [line,setLine]=useState(false);
    const cutIt=()=>{
setLine(true);
    };
return(
    <>
    <div className="todo_style">
      <span onClick={cutIt}>
        <DeleteIcon className="deleteIcon"/>
        </span>
        {/* Conditional opertor used */}
    <li style={{textDecoration: line?"line-through":"none"}} > {props.text}</li>
    </div>
    </>
)
};
export default Todoapplist;
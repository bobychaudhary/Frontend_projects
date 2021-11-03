
import {useState} from "react ";
import ReactDOM from 'react-dom';
 
function MyForm(){
    const [name, setName]=useState("");
    const eventSubmit=(Event)=>{
        Event.preventDefault();
    }
    return(
        <form onSubmit={eventSubmit}
        <label>Enter your name:</label>
        <input type="text";
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
        </label>
        <input type="submit"/>
        </form>)
    )
}
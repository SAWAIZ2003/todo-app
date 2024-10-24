import { useState } from "react"

export function Todoinput(props){

    const {handleAddTodo} = props
    const [inputVal , setInputVal] = useState('')
    console.log(inputVal)

    return(
        <div className="input-container">
            <input value={inputVal} onChange={(e)=>{setInputVal
             (e.target.value)}} placeholder="Add task"/>
            <button onClick={()=>{
                if(!inputVal)
                { return }
                handleAddTodo(inputVal)
                setInputVal('')
            }}>
            <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}
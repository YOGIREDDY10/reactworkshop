import React, {useState} from "react"

let HooksConcept=()=>{

    let [count,setCount]=useState(0)
    return(
        <div>
            <h1>hooksconcept</h1>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Count Increment</button>
        </div>
    );
}

export default HooksConcept;
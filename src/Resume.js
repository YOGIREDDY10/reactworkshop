import React from 'react';
import {useLocation} from 'react-router-dom';
import data from './data/data.json';


let Resume=()=>{
    let location=useLocation();
    let arrayIndex=location.info.id;
    let singleProfile=data.profiles[arrayIndex];
    console.log(arrayIndex)
    return(
        <div class="parent">
            <div class="child">
            <h2>{singleProfile.basics.info}</h2>
            </div>
            <div className="child2">
                {singleProfile.skills.map((skillValue,skillIndex)=>(
                    <div key={skillIndex}>
                            <h2>{skillValue.type}</h2>
                            {skillValue.values.map((dataValue,dataIndex)=>(
                                <span key={dataIndex} className="dark">
                                   {dataValue} 
                                
                                </span>
                            ))}                    
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Resume;
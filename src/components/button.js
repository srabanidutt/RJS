import React,{useState} from 'react'
import Rectangle from './rectangle'
import './design.css'
export default function Button() {
    const [istate,fstate]=useState({value:false})
    const buttonchange=()=>{
        fstate({value:true})
        //console.log("button clicked");
    }
    return (
        <div>
            <Rectangle child={istate.value}/>
            <center><button onClick={buttonchange}>Press</button></center>  
            {istate.value?<center>Button Clicked</center>:null}       
        </div>
    )
}

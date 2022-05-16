import React, {useState} from 'react'
import "./Sidebar.css"

function Sidebar(){
    const current = new Date();
  const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}  ${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;
    return(
        <div className="Sidebar" style={{backgroundImage:"url(/assets/MenuSpace.jpeg)"}}>
            {date}
            <div className="listtop">
                <span style={{color:"green",cursor:"pointer"}}>Home</span> |  <span style={{color:"green",cursor:"pointer"}}>Sign In</span> |
            </div>
            <div className="tree">

            </div>
        </div>
    );
}

export default Sidebar;
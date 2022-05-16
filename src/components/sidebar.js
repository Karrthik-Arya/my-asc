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
            <p style={{marginLeft:"6px", marginTop:"5px", fontSize:"0.75vw"}}>
            <img src="assets/tp.bmp" />Academic</p>
            <p style={{marginLeft:"6px",marginTop:"-15px", fontSize:"0.75vw"}}>
            <img src="assets/tp.bmp" />
            Library/Archives</p>
            <p style={{marginLeft:"6px", fontSize:"0.75vw"}}><img src="assets/tn.bmp" /> Placement</p>
            <p style={{marginLeft:"6px", fontSize:"0.75vw"}}><img src="assets/tn.bmp" />Moodle</p>
            <p style={{marginLeft:"6px", fontSize:"0.75vw"}}><img src="assets/tn.bmp" />IRCC</p>
            <p style={{marginLeft:"6px", fontSize:"0.75vw"}}><img src="assets/tp.bmp" />Admin Interfaces</p>
            <p style={{marginLeft:"6px", fontSize:"0.75vw"}}><img src="assets/tn.bmp" />Surveys</p>
            <p style={{marginLeft:"6px", fontSize:"0.75vw"}}><img src="assets/tn.bmp" />Maintenance complaints</p>
            <p style={{marginLeft:"6px", fontSize:"0.75vw"}}><img src="assets/tn.bmp" />Guest House</p>
            <p style={{marginLeft:"6px", fontSize:"0.75vw"}}><img src="assets/tn.bmp" />Visitor Entry/Exit Pass</p>
            <p style={{marginLeft:"6px", fontSize:"0.75vw"}}><img src="assets/tn.bmp" />GatePass</p>
            <p style={{marginLeft:"6px", fontSize:"0.75vw"}}><img src="assets/tp.bmp" />Downloadable Forms</p>
            <p style={{marginLeft:"6px", fontSize:"0.75vw"}}><img src="assets/tn.bmp" />Online Purchase System (Reports Only)</p>
            <p style={{marginLeft:"6px", fontSize:"0.75vw"}}><img src="assets/tn.bmp" />Scrutiny of job applicants</p>
            <p style={{marginLeft:"6px", fontSize:"0.75vw"}}><img src="assets/tn.bmp" />Online Mobile Registry</p>
            <p style={{marginLeft:"6px", fontSize:"0.75vw"}}><img src="assets/tn.bmp" />Print</p>
        </div>
    );
}

export default Sidebar;
import React, {useState} from 'react'
import "./login.css"
function Login(){
    return(
            <div style={{marginLeft:"16vw", display:"inline-block",backgroundImage:"url(/assets/LoginWorkSpace.jpeg)", width:"80vw", height:"100vh"}}>
                <img src="/assets/login.jpg" style={{marginLeft:"1.5vw", width:"50px",marginTop:"5vh"}}></img>
                <div className="login-box">
                    LDAP User ID:
                    <input type="text" className="login-field" />
                </div>
                <div className="login-box" style={{display:'block', marginTop:"8px", marginLeft:"14.6vw"}}>
                    Password:
                    <input type="text" className="login-field" style={{marginLeft:"7.5vw"}} />
                </div>
                <input name="submit" type="image" src="/assets/login.short.button.gif" style={{marginTop:"8px" ,marginLeft:"26.5vw"}}/>

                <div style={{marginTop:"20px" ,color:"#4B6397", fontWeight:"bold", fontSize:"20px"}}>Welcome to the IITB Academics and Administrative Portal</div>

                <div style={{marginTop:"50px"}}>
                    <h2 style={{textAlign:"center", color:"rgb(255, 0, 255)",fontWeight:"normal"}}>View all ERP notices</h2>
                    <div style={{height:"200px",width:"100%",border:"solid 2px orange",overflow:"scroll","overflow-x":"hidden","overflow-y":"scroll"}}>
<p style={{height:"200px",margin:"0px"}}>
<table style={{width:"100%"}}>


	<tbody><tr>
		
			<td>
<h3 style={{margin:0}}><span style={{color: "#800000"}}><a title="SOP for SOLMAN" href="http://asc.iitb.ac.in/acadmenu/notices/Solman%20End%20User SOP_Final.pdf" target="_blank" rel="noopener"><span style={{color: "#0000ff"}}>SOP for SolMan_End User</span></a> <span style={{color: "#000000"}}>and</span> <a title="SOP for Ticket Processor" href="http://asc.iitb.ac.in/acadmenu/notices/Solman%20SOP_Ticket Processor.pdf" target="_blank" rel="noopener"><span style={{color: "#ff00ff"}}>SOP for SolMan_Ticket Processor</span></a></span></h3>
</td>
			
		</tr>
	
	<tr>
		
			<td>
<h3 style={{margin:0}}><span style={{color: "#0000ff"}}><a style={{color: "#0000ff"}} title="SOP for DMS" href="http://asc.iitb.ac.in/acadmenu/notices/Introduction_to_SAP_Document_Management_System_DMS.pdf" target="_blank" rel="noopener">SOP for DMS</a> <span style={{color: "#000000"}}>and </span></span><span style={{color: "#ff00ff"}}><a style={{color: "#ff00ff"}} title="Approval of DMS document" href="http://asc.iitb.ac.in/acadmenu/notices/Process_to_approve_DMS_document_in_ERP.pdf" target="_blank" rel="noopener">Approval of DMS document</a></span></h3>
</td>
			
		</tr>
	
	<tr>
		
			<td>
<h2 id="mcetoc_1ffpi9uan0" style={{margin:0}}><span style={{color: "#ff6600"}}><a style={{color: "#ff6600"}} title="ERP Refresher workshop ( PPT_Recordings_Aug_Sep_2021)" href="ERP_PPT_links.html" target="_blank" rel="noopener"><strong>ERP Refresher workshop (Presentations_Recordings_Aug_Sep_2021)</strong></a></span></h2>
</td>
			
		</tr>
	
	<tr>
		
			<td><a target="_blank" href="/acadmenu/notices/ERP helpdesk details.pdf">
</a><h2 id="mcetoc_1fe37e1fh0" style={{margin:0}}><a target="_blank" href="/acadmenu/notices/ERP helpdesk details.pdf"></a><a href="http://asc.iitb.ac.in/acadmenu/notices/ASC%20Helpdesk details.pdf" target="_blank" rel="noopener"><span style={{color: "#339966"}}>ASC-ERP Helpdesk details</span></a></h2>
</td>
			
		</tr>

<tr>
    
        <td>
<h2 style={{margin:0}}><a href="https://ep.iitb.ac.in/irj/portal" target="_blank" rel="noopener">ERP Login to view salary slip &amp; Apply/Approve leave</a></h2>
</td>
        
    </tr>

<tr>
    
        <td><a target="_blank" href="/acadmenu/notices/notininbox.pdf"><p style={{margin:0}}>Approving document which is not available as work-item in SAP inbox</p></a></td>
        
    </tr>
	</tbody></table>
	</p></div>
                </div>
            </div>
    );

}

export default Login;
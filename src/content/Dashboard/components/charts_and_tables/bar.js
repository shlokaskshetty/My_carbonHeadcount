import { useState } from "react";
import getData from "../../data/datas";
import { FormGroup,TextInput,Button } from "@carbon/react";
import makeBarGraphValues from "../functions/makeBarGraphValues";
import { TableLeader } from "./table";
import { GroupedBarChart } from "@carbon/charts-react";
import baroptions from "./chart_options/barchart_options"

const BarGraph=(data,choice) =>{
    const [leadername,setLeaderName]=useState("");
    const fulldata=getData("fulldata")
    var newpagedata_emptype=makeBarGraphValues(data,leadername)
    return(
        <>
            <div className="boxheader">Leader statistics</div>
            <div className="boxarea" style={{height:"100%", width:"100%",padding:"10px", alignItems:"center",justifyItems:"center"}}>
                <FormGroup style={{display:"flex",padding:"0"}}>
                <TextInput id="leadernameinput" style={{height:"48px",fontSize:"12px",margin:"0",boxShadow:"0px 0px 3px 3px #bbbbbb"}}></TextInput>
                <Button type="submit" className="submitbutton" style={{paddingRight:"5px",paddingLeft:"5px",fontSize:"10px",margin:"0",boxShadow:"0px 0px 3px 3px #bbbbbb"}}
                onClick={()=>{setLeaderName(document.getElementById("leadernameinput").value);}}>Submit</Button>
                </FormGroup>
                <br/>
                <div className="datemonthflex" style={{display:"flex",width:"100%",height:"100%",gap:"10px"}}>
                       <div style={{height:"100%",width:"100%"}}><GroupedBarChart data={newpagedata_emptype} 
                                options={baroptions}
                                /></div>
                       <div style={{height:"100%",width:"100%",overflow:"scroll",border:"2px solid #000000aa",borderRadius:"10px"}}>{TableLeader(fulldata,leadername)}</div>
                </div>
            </div>
        </>
    )
}
export default BarGraph;
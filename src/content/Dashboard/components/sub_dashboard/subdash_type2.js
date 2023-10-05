import { Box4 } from "../box_types/chart_boxes"
import getData from "../../data/datas";
import padValues from "../functions/padValuesAreaChart";
export const SubDash_OnboardingSeparation=({dashheading})=>{
    
    const data_doj=getData("DOJ");
    const data_dol=getData("DOL");

    var data_dol_only_absentees=[]
    for(var i=0;i<data_dol.length;i++){
        if(data_dol[i].key[0]!=null){
            data_dol_only_absentees.push(data_dol[i])
        }
    }
    return(

        <div style={{border:"4px solid black",borderRadius:"10px",padding:"15px"}}>
            <div className="subdashheader">{dashheading}</div>
            <div className="gridbg">
                <Box4 dashtype={"doj"} data={padDOJDOLValues(data_doj,"Join rate")}
                        headervalue="DOJ"/>
                <Box4 dashtype={"dol"} data={padDOJDOLValues(data_dol_only_absentees,"Leave rate")}
                        headervalue="DOL"/>
            </div>
        </div>
    )
}

function padDOJDOLValues(data,groupname){
    var a=[],b=[]
    for(var i=0;i<data.length;i++){
        a.push({key:data[i].key,value:data[i].value})
    }
    a=padValues(a,groupname)
    return a
}  
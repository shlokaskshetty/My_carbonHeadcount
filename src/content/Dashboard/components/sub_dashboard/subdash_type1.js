//dashboard for employee type

import "./styles.css"
import '@carbon/charts-react/styles.css'
import { Box1,Box2,Box3 } from "../box_types/chart_boxes";


export const SubDash1=({data,dashtype,dashheading})=>{
    return(
        <div style={{border:"4px solid black",borderRadius:"10px",padding:"15px"}}>
            <div className="subdashheader">{dashheading}</div>
            {data.length===0?(<div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>Nothing to show</div>):(
            <div className="gridbg">
                <Box1 dashtype={dashtype} data={data}/>
                <Box2 dashtype={dashtype} data={data}/>
                <Box3 dashtype={dashtype} data={data}/>
            </div>)}
        </div>
    )
}
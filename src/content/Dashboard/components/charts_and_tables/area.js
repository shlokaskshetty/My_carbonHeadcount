import { AreaChart, GroupedBarChart, LineChart, SimpleBarChart } from "@carbon/charts-react"
import areaoptions from "./chart_options/areachart_options"
import padValues from "../functions/padValuesAreaChart"

const AreaGraph=(data,groupname)=>{
    console.log("inside")
    console.log(data)
    return(
        <>
            <AreaChart data={data} options={areaoptions}/>
            {/* <p style={{textAlign:"center"}}>
                Number of employees currently in the company: {data_dol[0].value}
            </p> */}
        </>
    )
}
export default AreaGraph;    
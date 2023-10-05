import { Box,BoxArea,BoxHeader } from "./box"
import { DateSelector } from "../dropdowns/dateselector"
import { useState } from "react";
import baroptions from "../charts_and_tables/chart_options/barchart_options"
import onlyCurrentEmployees from "../functions/onlyCurrentEmployees";
import { GroupedBarChart } from "@carbon/charts-react";
import Groupwise_DOJ_DOL_Table from "../charts_and_tables/table_v2";
import makeTableV2Values from "../functions/makeTableV2Values";
import PieGraph from "../charts_and_tables/pie";
import AreaGraph from "../charts_and_tables/area";
import "./style.css"

export const Box1=({data,dashtype})=>{
    
    const [barmonth,setBarMonth]=useState(1);
    const [baryear,setBarYear]=useState(2000);
    console.log("EMPTYPE  " +dashtype+ "--->")
    console.log(data)
    return(
        <Box className="box box1" link={"/dashnew?a=barchart&b="+dashtype+"&c="+barmonth+"&d="+baryear}>
            <BoxHeader>Number of employees under each leader</BoxHeader>
            <BoxArea>
                {DateSelector(setBarMonth,setBarYear)}
                <GroupedBarChart data={onlyCurrentEmployees(data,barmonth,baryear)}
                                options={baroptions}/>
            </BoxArea>
        </Box>
    )
}

export const Box2=({data,dashtype})=>{
    return(
        <Box className="box box2" link={"/dashnew?a=tablechart&b="+dashtype+"&c=&d="}>
            <BoxHeader>Leave rate V join rate</BoxHeader>
            <BoxArea style={{alignItems:"baseline"}}>
                {Groupwise_DOJ_DOL_Table(makeTableV2Values(data))}
            </BoxArea>
        </Box>
    )
}

export const Box3=({data,dashtype})=>{
    const [piemonth,setPieMonth]=useState(1);
    const [pieyear,setPieYear]=useState(2000);
    return(
        <Box className="box box3" link={"/dashnew?a=piechart&b="+dashtype+"&c="+piemonth+"&d="+pieyear}>
            <BoxHeader>Percentage</BoxHeader>
            <BoxArea>
                {DateSelector(setPieMonth,setPieYear)}
                {PieGraph(data,piemonth,pieyear)}
            </BoxArea>
        </Box>
    )
}

export const Box4=({data,dashtype,headervalue})=>{
    return(
        <Box className='box box4' link={"/dashnew?a=areachart&b="+dashtype+"&c=&d="}>
            <BoxHeader>{headervalue}</BoxHeader>
            {data.length==0?(
                        <div style={{display:"flex",height:"100%",alignItems:"center",justifyContent:"center"}}>
                            Nothing to display as no employees have
                            {dashtype==="doj"?(" joined "):(" left ")}
                            the company
                        </div>
                        )
                :(
                        <BoxArea>
                            {AreaGraph(data,dashtype)}
                        </BoxArea>
                    )
            }
        </Box>
    )
}
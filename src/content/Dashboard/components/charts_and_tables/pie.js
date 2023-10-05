import makePieValues from "../functions/makePieValues";
import { DonutChart } from "@carbon/charts-react";
import pieoptions from "./chart_options/piechart_options";
import "./styles.css"
import "../../index.css"
export const PieGraph=(data,piemonth,pieyear)=>{
    return(
        <DonutChart data={makePieValues(data,piemonth,pieyear)}
                    options={pieoptions}/> 
    )
}
export default PieGraph;
//changed
import "./index.css"
import getData from "./data/datas";

import AreaGraph from "./components/charts_and_tables/area";
import PieGraph from "./components/charts_and_tables/pie"
import BarGraph from "./components/charts_and_tables/bar"
import Groupwise_DOJ_DOL_Table from "./components/charts_and_tables/table_v2";
import padValues from "./components/functions/padValuesAreaChart";
import makeTableV2Values from "./components/functions/makeTableV2Values";




export default function ChooseBox(a,b,c,d){
    var data_emptype=getData("Emp_Type")
    var data_diversity=getData("Diversity")
    var data_location=getData("Location")
    var data_doj=getData("DOJ")
    var data_dol=getData("DOL")
    
    var data_dol_only_absentees=[]
    for(var i=0;i<data_dol.length;i++){
        if(data_dol[i].key[0]!=null){
            data_dol_only_absentees.push(data_dol[i])
        }
    }

    if(a==="areachart"){
        if(b==="doj")
            return AreaGraph(padDOJDOLValues(data_doj,"Join rate"),"doj","Employee join count per month");
        else
            return AreaGraph(padDOJDOLValues(data_dol_only_absentees,"Leave rate"),"dol","Employee leave count per month");
    }
    if(a==="piechart"){
        if(b==="emptype")
            return PieGraph(data_emptype,c,d);
        if(b==="diversity")
            return PieGraph(data_diversity,c,d);
        else    
            return PieGraph(data_location);
    }
    if(a==="barchart"){
        if(b==="emptype")
            return BarGraph(data_emptype);
        if(b==="diversity")
            return BarGraph(data_diversity);
        else    
            return BarGraph(data_location);
    }
    if(a==="tablechart"){
        if(b==="emptype")
            return Groupwise_DOJ_DOL_Table(makeTableV2Values(data_emptype))
        if(b==="diversity")
            return Groupwise_DOJ_DOL_Table(makeTableV2Values(data_diversity))
        if(b==="location")
            return Groupwise_DOJ_DOL_Table(makeTableV2Values(data_location));
        
    }
}



function padDOJDOLValues(data,groupname){
    var a=[],b=[]
    for(var i=0;i<data.length;i++){
        a.push({key:data[i].key,value:data[i].value})
    }
    a=padValues(a,groupname)
    return a
}  
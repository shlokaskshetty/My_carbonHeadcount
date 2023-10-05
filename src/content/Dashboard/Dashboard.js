//dashboard

import "./index.css"
import getData from "./data/datas";

import { SubDash1 } from "./components/sub_dashboard/subdash_type1";
import {SubDash_OnboardingSeparation} from "./components/sub_dashboard/subdash_type2";

export default function Dashboard(){
    const data_emptype=getData("Emp_Type");
    console.log("()=>")
    console.log(data_emptype)
    const data_diversity=getData("Diversity");
    const data_location=getData("Location");

    return(
        <div className="dashgrid">
            <SubDash1 data={data_emptype} dashtype="emptype" dashheading="Employee Type"/>
            <SubDash1 data={data_diversity} dashtype="diversity" dashheading="Diversity"/>
            <SubDash1 data={data_location} dashtype="location" dashheading="Location"/>
            <SubDash_OnboardingSeparation dashheading="Onboarding/Separation"/> 
        </div>
    );
}



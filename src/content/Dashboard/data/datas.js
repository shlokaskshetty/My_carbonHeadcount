
/*These are the variables for storing data obtained from database!! */
import DOJdata from "./DOJdata";
import DOLdata from "./DOLdata";
import EMPTYPEdata from "./EMPTYPEdata";
import DIVERSITYdata from "./DIVERSITYdata";
import LOCATIONdata from "./LOCATIONdata";
import FULLdata from "./fulldata";

//this is where i send the data to the files that request them

export default function getData(choice){
    const doj_data=DOJdata().getDOJData();
    const dol_data=DOLdata().getDOLData();
    const emptype_data=EMPTYPEdata().getEmpTypeData();
    const diversity_data=DIVERSITYdata().getDiversityData();
    const location_data=LOCATIONdata().getLocationData();
    const full_data=FULLdata().getFullData();
    if(choice==="fulldata"){
        return full_data.rows;
    }
    if(choice==="DOJ"){
        return doj_data.rows;
    }
    if(choice==="DOL"){
        return dol_data.rows;
    }
    if(choice==="Emp_Type"){
        return emptype_data.rows;
    }
    if(choice==="Diversity"){
        return diversity_data.rows;
    }
    if(choice==="Location")
        return location_data.rows;
    return location_data.rows;
}
import { Dropdown } from "@carbon/react"
import { useEffect } from "react";
export default function Year_Dropdown(setYear){
    const currentyear=new Date().getFullYear();
    useEffect(() => {
        {setYear(currentyear);console.log("Loaded"+currentyear)}
      }, []);

    return(
        <Dropdown id="yeardropdown" label="Select"  items={[
            {id:2020,label:"2020"},{id:2021,label:"2021"},
            {id:2022,label:"2022"},{id:2023,label:"2023"},
        ]}
        initialSelectedItem={{id:currentyear,label:currentyear.toString()}}
        onChange={(event)=>{setYear(event.selectedItem.id);console.log("Changed"+event.selectedItem.id)}}
        />
    )
}
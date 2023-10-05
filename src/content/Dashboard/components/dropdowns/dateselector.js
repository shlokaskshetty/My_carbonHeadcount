import Month_Dropdown from "./month_dropdown"
import Year_Dropdown from "./year_dropdown"

export const DateSelector=(setMonth,setYear)=>{
    return(
        <div className="datemonthflex" style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%"}}>
            {Month_Dropdown(setMonth)}
            {Year_Dropdown(setYear)}
        </div>
    )
}
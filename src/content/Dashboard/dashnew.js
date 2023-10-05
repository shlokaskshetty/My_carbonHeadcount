//to open a box in a new tab

import { useLocation, useParams } from "react-router-dom";
import ChooseBox from "./choosebox";
import "./index.css"
export default function DashNew(){
/*
const params = new URLSearchParams(document.location.search);
const a = params.get("a");
const b = params.get("b");
const c = params.get("c");
const d = parseInt(params.get("d"));*/

const location = useLocation();
const params = new URLSearchParams(location.search);
const a = params.get('a');
const b = params.get('b');
const c = params.get('c');
const d = params.get('d');
    return(
        <div className="newpagemaindiv">
            {ChooseBox(a,b,c,d)}
        </div>
    )
}
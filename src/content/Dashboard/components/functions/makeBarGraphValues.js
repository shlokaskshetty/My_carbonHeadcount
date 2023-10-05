import padValues from "./padValues"
export default function makeBarGraphValues(data,leadername){
    var a=[],x1,x2,b={}
    for(var i=0;i<data.length;i++){
        if(data[i].key[5]===leadername){
            a.push({"group":data[i].key[4],"key":data[i].key.slice(0,4),"value":data[i].value})
        }
    }
    console.log(a)
    a=padValues(a)
    return a
}

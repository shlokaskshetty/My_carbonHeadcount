
export default function makeTableV2Values(data){
    var a=[],i,j,b
    var keylis={}
    var headers=[
        {key:"group",value:"Group type"},
        {key:"numjoined",value:"Number joined"},
        {key:"numleft",value:"Number left"}
    ]
    for(i=0;i<data.length;i++){
        if(keylis[data[i].key[4]])
            {
                keylis[data[i].key[4]][0]+=data[i].value
            }
        else{
            keylis[data[i].key[4]]=[data[i].value,0]
        }
        if(data[i].key[2]!=null && data[i].key[3]!=null){
            keylis[data[i].key[4]][1]+=data[i].value
        }
    }
    for(i=0;i<Object.keys(keylis).length;i++){
        j=Object.keys(keylis)[i]
        b={id:(i+1).toString()}
        b[headers[0].key]=j
        b[headers[1].key]=keylis[j][0]
        b[headers[2].key]=keylis[j][1]
        a.push(b)
    }
    return {"headers":headers,"rows":a}
}

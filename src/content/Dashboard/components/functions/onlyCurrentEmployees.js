
export default function onlyCurrentEmployees(data,month,year){
    if(!data.toString()){
      return []
    }
    var a=new Map(),mapkey;
    var keys=[]
    for(var i=0;i<data.length;i++){
        if(data[i].key[0]==year && data[i].key[1]>month){
            continue;
        }
        if(data[i].key[0]>year){
            continue
        }
        
        mapkey=data[i].key[4]+","+data[i].key[5]
        if(data[i].key[2]==null && data[i].key[3]==null){
            if(a.get(mapkey)) {
                a.set(mapkey,a.get(mapkey)+data[i].value);
                continue;
                }
            a.set(mapkey,data[i].value)
            keys.push(mapkey)
        }
        if(data[i].key[2]==year && data[i].key[3]>=month){
          if(a.get(mapkey)) {
              a.set(mapkey,a.get(mapkey)+data[i].value);
              continue;
              }
          a.set(mapkey,data[i].value)
          keys.push(mapkey)
        }
        if(data[i].key[2]>year){
          if(a.get(mapkey)) {
              a.set(mapkey,a.get(mapkey)+data[i].value);
              continue;
              }
          a.set(mapkey,data[i].value)
          keys.push(mapkey)
        }
    }
    var b=[]
    for(i=0;i<Array.from(a.keys()).length;i++){
      mapkey=Array.from(a.keys())[i];
      b.push({group:data[i].key[4],key:data[i].key[5],value:a.get(mapkey)})
    }
    return b
}

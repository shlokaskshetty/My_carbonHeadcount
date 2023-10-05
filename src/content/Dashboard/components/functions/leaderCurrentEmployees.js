
export default function LeaderCurrentEmployees(data,month,year){
    var a={}
    var d={}
    var keys={}
    for(var i=0;i<data.length;i++){
        if(data[i].key[0]==year && data[i].key[1]>month){
            continue;
        }
        if(data[i].key[0]>year){
            continue
        }
        
        if(data[i].key[2]==null && data[i].key[3]==null){
            if(d[data[i].key[5]]){
            }
            else{
                d[data[i].key[5]]={}
                keys[data[i].key[5]]=[]
            }
            if(d[data[i].key[5]][data[i].key[4]]) {
                d[data[i].key[5]][data[i].key[4]]+=data[i].value;
              } 
            else {
                d[data[i].key[5]][data[i].key[4]] = data[i].value;
                keys[data[i].key[5]].push(data[i].key[5])
            }
        }
        if(data[i].key[2]==year && data[i].key[3]>=month){
            if(d[data[i].key[5]]){
            }
            else{
                d[data[i].key[5]]={}
                keys[data[i].key[5]]=[]
            }
            if(d[data[i].key[5]][data[i].key[4]]) {
                d[data[i].key[5]][data[i].key[4]]+=data[i].value;
              } 
            else {
                d[data[i].key[5]][data[i].key[4]] = data[i].value;
                keys[data[i].key[5]].push(data[i].key[5])
            }
            continue;
        }
        if(data[i].key[2]>year){
            if(d[data[i].key[5]]){
            }
            else{
                d[data[i].key[5]]={}
                keys[data[i].key[5]]=[]
            }
            if(d[data[i].key[5]][data[i].key[4]]) {
                d[data[i].key[5]][data[i].key[4]]+=data[i].value;
              } 
            else {
                d[data[i].key[5]][data[i].key[4]] = data[i].value;
                keys[data[i].key[5]].push(data[i].key[5])
            }
        }
    }
    var b=[],k=[],j
    for(i=0;i<keys.length;i++){
        k=[]
        for(j=0;j<d[i].length;j++)
            k.push({key:keys[i],value:a[keys[i]]})
        b.push(k)
    }
    return b
}

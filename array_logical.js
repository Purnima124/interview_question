var array1=[10,20,30,40]
var array2=[100,200,300,400]
var i=0
var n=[]
for(let i of array1){
    for (var j=array2.length-1;j>=0;j--){
    n.push(i,array2[j])
    console.log(i,array2[j])
    } 
    
}


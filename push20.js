var array=[1,2,3,4,5,6,7]
var a=[]
for(let i of array){
    if(i%3==0){
        a.push(20)
    }
    else{
        a.push(i)
    }
}
console.log(a)
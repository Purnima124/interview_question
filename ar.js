var array=[9,8,6,3,2,5,4]
var even_no=0
var odd_no=0
var a=[]
var b=[]
for(let i of array){
    if(i%2==0){
        a.push(i)
        even_no+=i
    }
    else{
        b.push(i)
        odd_no+=i
    }
}
console.log(a,"even_no",even_no/100)
console.log(b,"odd_no",odd_no/100)
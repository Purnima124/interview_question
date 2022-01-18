let a=[]
var n=[]
const r=require("readline-sync")
var num=r.questionInt("enter the number :")
i=2
while (i<=num){
    b=1
    while (b<=10){
        if(i%2==0){
            a.push(i*b)
        b=b+1
        }else{
            n.push(i*b)
        b=b+1
        }
    }
    i=i+1
}
console.log(a)
console.log(n)




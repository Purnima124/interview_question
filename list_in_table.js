let a=[]
const r=require("readline-sync")
var num=r.questionInt("enter the number :")
i=2
while (i<=num){
    b=1
    n=[]
    while (b<=10){
        n.push(i*b)
        b=b+1
    }
    i=i+1
    a.push(n)
}
console.log(a)

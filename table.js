const r=require("readline-sync")
var num=r.questionInt("enter the number :")
i=2
while (i<=num){
    b=1
    while (b<=10){
        console.log(i,"*",b,"=",i*b)
        b=b+1
    }
    console.log()
    i=i+1
}



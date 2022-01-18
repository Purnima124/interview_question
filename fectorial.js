var r=require("readline-sync")
var num=r.questionInt("Enter the number ")
var fac=1;
while(num>0){
    fac=num*fac
    num=num-1
}
console.log(fac)



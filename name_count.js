const r=require("readline-sync")
var name=r.question("Enter the name ")
i=0;
count=0;
while(i<name.length){
    count+=1
    i=i+1
}
console.log(count)


// in for loop(for loop)

const r=require("readline-sync")
var name=r.question("Enter the name ")
count=0
for(let i in name){
    count+=1
}
console.log(count)
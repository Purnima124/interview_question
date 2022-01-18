const r=require("readline-sync")
var name=r.question("Enter the name ")
var i=0
count=0
while (i<name.length){
    k="aeiou"
    if (k.includes(name[i]))
        count+=1
    i=i+1
}
console.log("Vovel No.",count)
    

object={}
for (var i=1;i<=3;i++){
    const r=require("readline-sync")
    var name=r.question("Enter the name :")
    var age=r.questionInt("Enter the age :")
    object[name]=age
}
console.log(object)


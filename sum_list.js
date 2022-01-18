function add(a,b){
    sum=0
    for(let i in a){
        sum+=a[i]+b[i]
    }
    console.log(sum)
    
}
add([1,2,3],[4,5,6])

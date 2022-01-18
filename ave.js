array=[9,8,6,3,2,5,4]
i=0
sum1=0
sum2=0
a=[]
b=[]
while(i<array.length){
    k=array[i]
    if(k%2==0){
        a.push(k)
        sum1+=k
    i=i+1
    }
    else{
        b.push(k)
        sum2+=k
    i=i+1
    }
}
console.log(a,"enen","sum =",sum1,"%",sum1/100)
console.log(b,"odd","sum =",sum2,"%",sum2/100)


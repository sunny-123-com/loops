a=[3,,6,9,12,15,18];
sum=0;
var i=0;
do{
    if(a[i]%2==0){
        sum+=a[i];
    }
    i++;
}
while(i<a.length);
console.log(sum);
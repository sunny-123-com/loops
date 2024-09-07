a=['a','b','c','d','e'];
reverse=" ";
var i=a.length-1;
while(i<a.length){
    reverse+=a[i]+" ";
    if(i==0){
        break;
    }
    i--;
}
console.log(reverse);
array=[1,2,3,4,5];
reverse_array=" ";
var i=array.length-1;
do{
    reverse_array+=array[i]+" ";
    if(i==0){
        break;
    }
    i--;
}
while(i<array.length);
console.log(reverse_array);
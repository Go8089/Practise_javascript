let rev = function(){
    let left = 0;
    let right = arr.length - 1;
    let mid = (right - (right - left)) /2;
    let mid1 = (right - (right - left)) /2;
    while(left < mid){
        let temp = arr[mid];
        arr[mid] = arr[left];
        arr[left] = temp;
        left++;
        mid--;
    }
    while(mid1 < right){
        mid1++;
        let temp = arr[right];
        arr[right] = arr[mid1];
        arr[mid1] = temp;
        right--;
    }
}
let arr = [5,9,12,15,18,21];
rev(arr);
for(let i of arr){
    console.log(i);
}
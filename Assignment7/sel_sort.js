"use strict";
/* eslint-disable*/

function selctionSort(arr){
    for(let i=0;i<arr.length;i++){
        let nextMin=findNextMinIndex(arr,i,arr.length-1);
        swapElements(arr,i,nextMin);
    }
}


function findNextMinIndex(arr,bottom,top){
    let min=arr[bottom];
    let minIndex=bottom;
    for(let i=bottom +1;i<=top;i++){
        if(arr[i]<min){
            min=arr[i];
            minIndex=i;
        }
    }
    return minIndex;
}
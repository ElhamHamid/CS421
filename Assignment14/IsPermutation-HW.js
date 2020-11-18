"use strict";
/* eslint-disable*/

const Sort = require('./ArraySorter.js');
const PQ = require('./PriorityQueue.js');
const Tab = require('./BST_Dictionary.js');
const Map = require('./HT_Dictionary.js');


function genData(n, k) {
    let dat = new Array(n);
    for (let i=0; i<n; i++) {
        let rand = Math.floor(Math.random()*1024)%k + 1;
        dat[i] = rand;
    }
    return dat;
}

let mySorter = new Sort.ArraySorter();

function isPermutationSort(A, B) {
    if(A.length!==B.length){
        return false;
    }
    mySorter.quickSort(A);
    mySorter.quickSort(B);
    let j=0;
    for(let i=0;i<A.length;i++){
        j<B.length;
        if(A[i]===B[j]){
            j++;
        }else{
            return false
        }
    }
    return true;

}
function isPermutationPQ(A, B) {
    if(A.length!==B.length){
        return false;
    }
    let PQA = new PQ.PriorityQueue();
    let p=A[0]
    PQA.insertItem(p,p);
    for(let i=1;i<A.length;i++){
        PQA.insertItem(A[i],A[i]);
    }
    let PQB = new PQ.PriorityQueue();
    let q=B[0];
    PQB.insertItem(q,q);
    for(let i=1;i<B.length;i++){
        PQB.insertItem(B[i],B[i]);
    }
    while(!PQB.isEmpty()){
        if(PQB.minKey()!==PQA.minKey()){
            return false
        }
        PQA.removeMin();
        PQB.removeMin();
    }

    return true;

}
function isPermutationBST(A, B) {
    if(A.length!==B.length){
        return false;
    }
    let p=A[0];
    let DA = new Tab.BST_Dictionary();
    DA.insertItem(p,1)
    for(let i=1;i<A.length;i++){
        let cnt=DA.findElement(A[i]);
        if(cnt===null){
            DA.insertItem(A[i],1);
        }else{
            DA.insertItem(A[i],cnt + 1);
        }
    }
    let q=B[0];
    let DB = new Tab.BST_Dictionary();
    DB.insertItem(q,1);
    for(let i=1;i<B.length;i++){
        let cnt=DB.findElement(B[i]);
        if(cnt===null){
            DA.insertItem(B[i],1);
        }else{
            DA.insertItem(B[i],cnt + 1);
        }
    }
    // if(DA.size()!==DB.size()){
    //     return false;
    // }
    let iter=DA.items()
    while(iter.hasNext()){
        let obj=iter.nextObject();
        let key=obj.key();
        let count=obj.element()
        let countB=DB.findElement(key);
        if(count!==countB){
            return false;
        }
    }
    return true;
}
function isPermutationHT(A, B) {
    if(A.length!==B.length){
        return false;
    }
    let p=A[0];
    let DA = new Map.HT_Dictionary();
    DA.insertItem(p,1)
    for(let i=1;i<A.length;i++){
        let cnt=DA.findElement(A[i]);
        if(cnt===null){
            DA.insertItem(A[i],1);
        }else{
            DA.insertItem(A[i],cnt + 1);
        }
    }
    let q=B[0];
    let DB = new Map.HT_Dictionary();
    DB.insertItem(q,1);
    for(let i=1;i<B.length;i++){
        let cnt=DB.findElement(B[i]);
        if(cnt===null){
            DA.insertItem(B[i],1);
        }else{
            DA.insertItem(B[i],cnt + 1);
        }
    }
    // if(DA.size()!==DB.size()){
    //     return false;
    // }
    let iter=DA.items()
    while(iter.hasNext()){
        let obj=iter.nextObject();
        let key=obj.key();
        let count=obj.element()
        let countB=DB.findElement(key);
        if(count!==countB){
            return false;
        }
    }
    return true;

}

let A = [ 15, 55, 34, 19, 28, 5, 2, 10, 99, 75, 25, 67, 94, 122, 21,17];
let B = [ 15, 55, 34, 19, 28, 5, 2, 10, 99, 75, 25, 67, 94, 122, 17,21];
// console.log(isPermutationSort(A,B));
// console.log(isPermutationPQ(A,B));
console.log(isPermutationBST(A,B));
console.log(isPermutationHT(A,B));

//  let dat = genData(100, 200);
//  mySorter.print(dat);
// console.log();
// mySorter.print(dat);

"use strict";
/* eslint-disable*/

const Map = require('./BST_Dictionary.js');
const List = require('./DLinkedList.js');

function genData(n, k) {
    let dat = new Array(n);
    for (let i = 0; i < n; i++) {
        let rand = Math.floor(Math.random() * 100) % k + 1;
        dat[i] = rand;
    }
    return dat;
}
function genData2(n, k) {
    let dat = new List.DLinkedList();
    for (let i = 0; i < n; i++) {
        let rand = Math.floor(Math.random() * 100) % k + 1;
        dat.insertLast(rand);
    }
    return dat;
}
function findWinner(dat) {
    let D = new Map.BST_Dictionary();
    let p = dat[0];
    D.insertItem(p, 1);
    for (let i = 1; i < dat.length; i++) {
        let cnt = D.findElement(dat[i]);
        if (cnt == null) {
            D.insertItem(dat[i], 1)
        } else {
            D.insertItem(dat[i], cnt + 1);
        }
    }
    // your code goes here for computing the totals for each candidate from array dat
    D.print();
    let winners = [];
    let winId
    let iter = D.items();
    let maxCnt = 0;
    while (iter.hasNext()) {
        let obj = iter.nextObject();
        let key = obj.key();
        let count = obj.element();
        if (count > maxCnt) {
            maxCnt = count;
            winId=key;
        }
        winners = [winId, maxCnt];
    }  // put the winners in an array
    // determine the winners from traversing the Dictionary D
    console.log(winners);
}
function findWinner2(dat) {
    let D = new Map.BST_Dictionary();
    let p=dat.first();
    D.insertItem(p.element(),1)
    while(!dat.isLast(p)){
        p=dat.after(p);
        let cnt=D.findElement(p.element());
        if(cnt===null){
            D.insertItem(p.element(),1);
        }else{
            D.insertItem(p.element(),cnt + 1);
        }
    }
    // your code goes here for calculating the vote totals and putting into Dictionary D
    // dat is a DLinkedList so you will need to use an iterator elements() on dat
    D.print();
    let winners = [];
    let maxCnt=0;
    let winn;
    let iter=D.items()
    while(iter.hasNext()){
        let obj=iter.nextObject();
        let Id=obj.key();
        let count=obj.element();
        if(count>maxCnt){
            maxCnt=count;
            winn=Id;
        }
        winners=[winn,maxCnt];
    }

    // put the winners in an array
    // determine the winners from traversing the Dictionary D
    console.log(winners);
}
let dat = genData(1000, 10);
//console.log(dat);
findWinner(dat);
let dat2 = genData2(1000, 10);
//console.log(dat2);
findWinner2(dat2);

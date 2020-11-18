"use strict";
/* eslint-disable*/

const Map = require('./HT_Dictionary.js');
const List = require('./DLinkedList.js');

function genData2(n, k) {
    let dat = new Array(n);
    for (let i = 0; i < n; i++) {
        let rand = Math.floor(Math.random() * 100) % k + 1;
        dat[i] = rand;
    }
    return dat;
}
function genData(n, k) {
    let dat = new List.DLinkedList();
    for (let i = 0; i < n; i++) {
        let rand = Math.floor(Math.random() * 100) % k + 1;
        dat.insertLast(rand);
    }
    return dat;
}
function findWinnerHT(dat) {  // dat is a LinkedList
    let D = new Map.HT_Dictionary();
    let p = dat.first();
    D.insertItem(p.element(), 1);
    while (!dat.isLast(p)) {
        p = dat.after(p);
        let cnt = D.findElement(p.element());
        if (cnt === null) {
            D.insertItem(p.element(), 1);
        } else {
            D.insertItem(p.element(), cnt + 1);
        }
    }
    let iter = D.items();
    let winners = [];
    let currMax = 0;
    let currID = -1;
    let winner = [currID, currMax];
    while (iter.hasNext()) {
        let obj = iter.nextObject();
        let Id = obj.key();
        let count = obj.element();
        if (count > currMax) {
            currMax = count;
            currID = Id;
            winner = [currID, currMax];
        }
    }
    winners.push(winner);
    console.log(winners);
}
let dat = genData(1000, 10);
//   console.log(dat);
 findWinnerHT(dat);

function findWinnerHT2(dat) {  // dat is a array
    let D = new Map.HT_Dictionary();
    let p = dat[0];
    D.insertItem(p, 1);
    for (let i = 1; i < dat.lenght; i++) {
        let cnt = D.findElement(dat[i]);
        if (cnt === null) {
            D.insertItem(p, 1);
        } else {
            D.insertItem(p, cnt + 1);
        }
    }
    let iter = D.items();
    let winners = [];
    let maxCnt = 0
    let currId=-1;
    winners=[currId,maxCnt];

    while (iter.hasNext()) {
        let obj = iter.nextObject();
        let Id = obj.key();
        let count = obj.element();
        if (count > maxCnt) {
            maxCnt = count;
            currId = Id;
            winners=[currId,maxCnt];
        }
    }
  console.log(winners);
}

let dat2 = genData2(1000, 10);
// console.log(dat2);
 findWinnerHT2(dat2);

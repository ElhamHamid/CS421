"use strict";
/* eslint-disable*/
/*
function findWinners(dat) {
    let D = new HT_Dictionary ();
    let p = dat[0];
    D.insertItem(p, 1);
    for (let i = 1; i < dat.length; i++) {
        let ct = D.findElement(dat[i]);
        if (ct == null) {
            D.insertItem(dat[i], 1);
        } else {
            D.insertItem(dat[i], e + 1);
        }
    }
    let iter = D.iterator();
    let maxCnt = 0;
    let winner;
    while (iter.hasNext()) {
        let obj = iter.nextObject();
        let Id = obj.key();
        let cnt = obj.element();
        if (cnt > maxCnt) {
            maxCnt = cnt;
            winner = Id;
        }
    }
    console.log(`${maxCnt},${winner}`);
}*/

function genData(n, k) {
    // n is the number of votes cast and k is the number of candidates
    let dat = new Array(n);
    for (let i = 0; i < n; i++) {
        let rand = Math.floor(Math.random() * 10) % k + 1;
        dat[i] = rand;
    }
    return dat;
}

let mydata = genData(200, 20);
console.log(mydata);

// findWinners(mydata);
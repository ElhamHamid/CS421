"use strict";
/* eslint-disable*/




function findHeight(t){
    return findHeightHelper(t,t.root());
}


function findHeightHelper(t,p){
    if(t.isExternal(p)){
        return 0;
    }else{
        let h;
       let x=findHeightHelper(t,t.leftChild(p));
       let y=findHeightHelper(t,t.rightChild(p));
        h= Math.max(x,y);
       return h + 1;
    }
}

var t0 = new BinaryTree();

var printer = new Print();

printer.print(t0);

let r = t0.insertRoot(300);
printer.print(t0);

let l1 = t0.insertLeft(r, 200);
let r1 = t0.insertRight(r, 400);
printer.print(t0);
t0.insertRight(l1, 250);
l1 = t0.insertLeft(l1, 100);
t0.insertRight(l1, 150);
l1 = t0.insertLeft(l1, 50);
l1 = t0.insertLeft(r1, 350);
r1 = t0.insertRight(r1, 500);
t0.insertLeft(r1, 450);
r1 = t0.insertRight(r1, 600);
t0.insertLeft(r1, 550);
r1 = t0.insertRight(r1, 800);
printer.print(t0);
t0.insertLeft(r1, 700);
printer.print(t0);

console.log(findHeight(t0));
"use strict";
/* eslint-disable*/

function Max(t){
    return MaxHelper(t,t.root());
}

function MaxHelper(t,p){
    if(t.isExternal(p)){
        return -Infinity;
    }
    else{
        let max=p.element();
        let left=MaxHelper(t,t.leftChild(p));
        let right=MaxHelper(t,t.rightChild(p));
        return Math.max(max,left,right);
    }
}

let test1 = new BinaryTree();

let printer1 = new Print();

printer1.print(test1);

let s = test1.insertRoot(300);
printer1.print(test1);

let l2 = test1.insertLeft(s, 200);
let r2 = test1.insertRight(s, 400);
printer1.print(test1);
test1.insertRight(l2, 250);
l2 = test1.insertLeft(l2, 100);
test1.insertRight(l2, 150);
l2 = test1.insertLeft(l2, 50);
l2 = test1.insertLeft(r2, 350);
r2 = test1.insertRight(r2, 500);
test1.insertLeft(r2, 450);
r2 = test1.insertRight(r2, 600);
test1.insertLeft(r2, 550);
r2 = test1.insertRight(r2, 800);
printer1.print(test1);
test1.insertLeft(r2, 700);
printer1.print(test1);

console.log(Max(test1));

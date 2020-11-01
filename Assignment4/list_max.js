"use strict";
/* eslint-disable*/

function findMax(l){
    return findMaxHelper(l,l.first())
}

function findMaxHelper(l,p){
    let x=p.element()
    if(l.isLast(p)){
        return p.element();
    }
    else{
      return Math.max(x,findMaxHelper(l,l.after(p)));
    }
}

let mylist2=new List();
mylist2.insertFirst(9);
mylist2.insertFirst(5);
mylist2.insertFirst(7);
mylist2.insertFirst(2);
mylist2.insertFirst(6);
mylist2.insertFirst(9);
mylist2.insertFirst(1);
mylist2.insertFirst(3);
mylist2.insertFirst(5);
mylist2.insertFirst(3);
mylist2.insertFirst(8);

mylist2.print();

console.log(findMax(mylist2));
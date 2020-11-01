"use strict";
/* eslint-disable*/

function Sum(l){
    return sumHelper(l,l.first())
}

function sumHelper(l,p){
    let sum=p.element();
    if(l.isLast(p)){
        return p.element();
    }
    else{
      return sum + sumHelper(l, l.after(p));

    }
}

let mylist=new List();
mylist.insertFirst(9);
mylist.insertFirst(8);
mylist.insertFirst(7);
mylist.insertFirst(6);
mylist.insertFirst(5);
mylist.insertFirst(4);
mylist.insertFirst(3);
mylist.insertFirst(2);
mylist.insertFirst(1);

mylist.print();

console.log(Sum(mylist));


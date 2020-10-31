"use strict";
/* eslint-disable */


function findMiddle(l){
    let p=l.first();
    let q=l.last();
     while(p!=q && l.after(p)!=q){
         p=l.after(p);
         q=l.before(q);
     }
     return q.element();
}

let list1=new DLinkedList();
list1.insertFirst(1);
list1.insertAfter(list1.first(),2);
list1.insertLast(4)
list1.insertBefore(list1.last(),3)
list1.print();


let list2=new DLinkedList();
list2.insertFirst(5);
list2.insertAfter(list2.first(),6);
list2.insertLast(7);
list2.print();

console.log(findMiddle(list1));
console.log(findMiddle(list2));
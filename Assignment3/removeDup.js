"use strict";
/* eslint-disable*/

function removeDuplicate(s){
    let p=s.first();
    while(!s.isLast(p)){
        let x=p.element();
        return DupHelper(s,s.after(p),x);
    }
}

function DupHelper(s,p,x){
    if(s.isLast(p)){
        if(x==p.element()){
            return s.remove(p);
        }
    }else{
        let q=s.after(p);
        if(x==p.element()){
            return s.remove(p);
        }
        DupHelper(s,q,x);
    }
}





let mySeq= new Sequence();
mySeq.insertFirst(10);
mySeq.insertLast(11);
mySeq.insertAfter(mySeq.first(),13);
mySeq.insertAfter(mySeq.first(),12);
mySeq.insertAfter(mySeq.first(),14);
mySeq.insertAfter(mySeq.first(),14);
mySeq.insertBefore(mySeq.last(),15);
mySeq.print()

console.log(removeDuplicate(mySeq));
mySeq.print()

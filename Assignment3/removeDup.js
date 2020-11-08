"use strict";
/* eslint-disable*/
// this is list version 
// function removeDuplicate(s){
//     let p=s.first();
//     while(!s.isLast(p)){
//         let x=p.element();
//         return DupHelper(s,s.after(p),x);
//     }
// }

// function DupHelper(s,p,x){
//     if(s.isLast(p)){
//         if(x === p.element()){
//             return s.remove(p.element());
//         }
//     }else{
//         let q = s.after(p);
//         if(x==p.element()){
//             return s.remove(p.element());
//         }
//         DupHelper(s,q,x);
//     }
// }


// this is sequence version
function removeDuplicate(s){
    let p=s[0];
    while(s[p]!=s[s.length-1]){
        let x=s[p];
        return DupHelper(s,s[p + 1],x);
    }
}

function DupHelper(s,p,x){
    if(s[p]===s[s.length-1]){
        if(x === s[p]){
            return remove(s[p]);
        }
    }else{
        let q = s[p + 1];
        if(s[p]===s[s.length-1]){
            if(x === s[p]){
                return remove(s[p]);
        }
        DupHelper(s,q,x);
    }
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
mySeq.print();

removeDuplicate(mySeq);
mySeq.print();

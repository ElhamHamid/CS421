"use strict";
/* eslint-disable */

class Max extends EulerTour{
    visitExternal(t,p,r){
        r[1]= - Infinity;
    }
    visitPostOrder(t,p,r){
        r[1]=Math.max(r[0],r[2],p.element());
    }

    max1(t){
        return this.eulerTour(t,t.root());
    }
}

let mytree1 = new BinaryTree();
let myprinter1 = new Print();

myprinter1.print(mytree1);

let m = mytree1.insertRoot(300);
myprinter1.print(mytree1);

let m1 = mytree1.insertLeft(m, 200);
let s = mytree1.insertRight(m, 400);
myprinter1.print(mytree1);

let maymult=new Max();

console.log(maymult.max1(mytree1));
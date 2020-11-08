"use strict";
/* eslint-disable */

class Sum extends EulerTour{
    visitExternal(t,p,r){
        r[1]=0;
    }
    visitPostOrder(t,p,r){
        r[1]=r[0]+r[2]+p.element();
    }

    sum(t){
        return this.eulerTour(t,t.root());
    }
}



let mytree = new BinaryTree();
let myprinter = new Print();

myprinter.print(mytree);

let h = mytree.insertRoot(300);
myprinter.print(mytree);

let h1 = mytree.insertLeft(h, 200);
let l = mytree.insertRight(h, 400);
myprinter.print(mytree);

let maysum=new Sum();

console.log(maysum.sum(mytree));
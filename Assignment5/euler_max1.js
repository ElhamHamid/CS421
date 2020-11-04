"use strict";
/* eslint-disable */

class Max extends EulerTour{
    visitExternal(t,p,r){
        r[1]=0;
    }
    visitPostOrder(t,p,r){
        r[1]=Math.max(r[0],r[2]) + 1;
    }

    Max(t){
        return this.eulerTour(t,t.root());
    }
}
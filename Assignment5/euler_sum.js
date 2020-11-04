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
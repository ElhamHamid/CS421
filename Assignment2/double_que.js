"use strict";
/* eslint-disable */
class DoubleQueue {
    constructor() {
        this._queIn=new Stack();
        this._queOut=new Stack();
    }

    enqueue(e){
        this._queIn.push(e);
    }
    dequeue(){
        while(this._queIn.size()!=0){
            this._queOut.push(this._queIn.pop());
        }
        return this._queOut.pop();
        
    }
    print(){
        this._queIn.print();
    }
    front(){
        return this._queOut.top()
    }
   
}

let testQue= new DoubleQueue();
testQue.enqueue(1);
testQue.enqueue(2);
testQue.enqueue(3);
testQue.print();

testQue.dequeue();
testQue.print();
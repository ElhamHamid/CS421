"use strict";
/* eslint-disable */

class Queue {
    constructor() {
        this._que=new DLinkedList();
    }

    enqueue(e){
        this._que.insertLast(e);
    }
    dequeue(){
        return this._que.remove(this._que.first());
        
    }
    front(){
        return this._que.first().element();
    }
    size(){
        return this._que.size();
    }
    isEmpty(){
        return this._que.isEmpty();
    }
    print(){
        this._que.print();
    }
}


let myQueue= new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.enqueue(5);
myQueue.print();

myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.print();

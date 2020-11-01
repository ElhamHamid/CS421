"use strict";
/* eslint-disable */

class Stack {
    constructor() {
        this._stack=new DLinkedList();
    }

    push(e){
        this._stack.insertFirst(e);
    }
    pop(){
        return this._stack.remove(this._stack.first());
    }
    top(){
        return this._stack.first().element();
    }
    size(){
        return this._stack.size();
    }
    isEmpty(){
        return this._stack.isEmpty();
    }
    print(){
        this._stack.print();
    }
}


let myStack=new Stack()
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
myStack.print();
console.log(myStack.size());

myStack.pop();
myStack.print();
myStack.pop();
myStack.print();
myStack.pop();
myStack.print();
console.log(myStack.size());

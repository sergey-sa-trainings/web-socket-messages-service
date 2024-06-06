'use strict';

class Queue {
    constructor() {
        this.items = new Map();
        this.frontIndex = 0;
        this.backIndex = 0;
    }
    async push(item) {
        this.items.set(this.backIndex, item);
        this.backIndex++;
    }
    async pop() {
        this.items.delete(this.frontIndex);
        this.frontIndex++;
    }
    async size() {
        return this.items.size;
    }
    async getAllItems() {
        return Object.fromEntries(this.items);
    }
}

module.exports = { Queue };
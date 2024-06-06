'use strict';

const { Queue } = require("../lib/queue.js");

const queue = new Queue()

/*
  Имитируем обращения к БД
*/

const MessageModel = {
    getMessagesCount: async () => {
        let data;

        try {
            data = await queue.size();
        }
        catch {
            return { err: true, data };
        }

        return {err: false, data}
    },

    getMessages: async () => {
        let data;

        try {
            data = await queue.getAllItems();
        }
        catch {
            return { err: true, data };
        }

        return {err: false, data}
    },

    createMessage: async (item) => {
        try {
            await queue.push(item);
        }
        catch {
            return false;
        }

        return true;
    },

    deleteMessage: async () => {
        try {
            await queue.pop();
        }
        catch {
            return false;
        }

        return true;
    },
};

module.exports = { MessageModel };
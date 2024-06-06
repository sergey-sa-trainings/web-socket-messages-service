'use strict';

var events = require('events');
const { MessageModel } = require("../models/messages.js");

const MESSAGES_CAPACITY = 9;

const serviceEventEmitter = new events.EventEmitter();

const MessageService = {
    getMessages: async () => {
        const { err, data } = await MessageModel.getMessages();
        const messages = [];

        Object.keys(data).forEach((key) => {
            messages.push(data[key]);
        })

        return { err, data: messages };
    },

    createMessage: async (message) => {
        const newMessage = {
            id: Date.now(),
            message,
        };

        const { err, data } = await MessageModel.getMessagesCount();
        if (err) {
            return false;
        }
        if (data === MESSAGES_CAPACITY) {
            const isSuccess = await MessageModel.deleteMessage();
            if (!isSuccess) {
                return false;
            }
        }

        const isSuccess = await MessageModel.createMessage(newMessage);

        if (!isSuccess) {
            return false;
        }

        // emit WebSocket notification event
        serviceEventEmitter.emit('wsNotify')

        return isSuccess;
    },
};

module.exports = { MessageService, serviceEventEmitter };
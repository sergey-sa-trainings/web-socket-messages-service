'use strict';

const { MessageService } = require("../../services/messages.js");

const MessageController = {
    getMessagesV1: async (_, res) => {
        const { err, data } = await MessageService.getMessages();

        if (err) {
            res.status(500).end();
        } else {
            res.status(200).json(data);
        }
    },

    createMessageV1: async (req, res) => {
        const { message } = req.body;
        const isSuccess = await MessageService.createMessage(message);

        if (isSuccess) {
            res.status(201).end();
        } else {
            res.status(500).end();
        }
    },
};

module.exports = { MessageController };
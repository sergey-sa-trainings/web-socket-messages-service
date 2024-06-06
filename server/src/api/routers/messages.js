'use strict';

const { Router } = require("express");
const path = require('node:path');
const { MessageController } = require("../controllers/messages.js");

const router = new Router();

router.get("/api/v1/messages", MessageController.getMessagesV1);
router.post("/api/v1/messages", MessageController.createMessageV1);

// All other GET requests not handled before will return our React app
router.get('*', function (_, res) {
    res.sendFile(path.join(process.cwd(), 'client_files', 'index.html'));
});

module.exports = { router }; 
const express = require('express');
const axios = require('axios');
const { EventEmitter } = require('events');
const webhookEvents = new EventEmitter();
const app = express();
const PORT = 3000;

app.use(express.json());

// Endpoint to receive client id and forward to a third-party service
app.post('/client/:id', (req, res) => {
    const clientId = req.params.id;
    
    try {
        // Send data to a third-party service
        axios.post(`http://localhost:${PORT}/thirdParty`, { clientId });

        // Listener for the webhook response
        webhookEvents.once(`webhookReceived-${clientId}`, (webhookData) => {
            res.send(webhookData.result);
        });
    } catch (error) {
        res.status(500).send({ message: "Failed to forward request." });
    }
});

// Webhook endpoint for third-party service to call
app.post('/webhook/:id', (req, res) => {
    // Emit an event when the webhook data is received
    webhookEvents.emit(`webhookReceived-${req.params.id}`, req.body);
    res.sendStatus(200);
});

app.post('/thirdParty', (req, res) => {
    // Dummy third-party endpoint, mabye should change to a real 
    // one or another local server?
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

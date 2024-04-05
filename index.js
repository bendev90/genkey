const express = require('express');
const genkey = require('./genkey');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT;
const wmid = process.env.WORKER_MACHINE_ID;

app.post('/genkey', (req, res) => {
    res.send({'key': genkey.genkeyId(wmid)});
});

app.listen(port, () => console.log(`Worker machine id: ${wmid} on port ${port}`));
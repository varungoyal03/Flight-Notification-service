const express = require('express');


const {QueueService} = require('./services');
const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.text());

app.get('/', (req, res) => {
    res.send("service is up");
});


app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    await QueueService.connectQueue();
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});

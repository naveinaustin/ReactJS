import config, {nodeEnv} from './config';
import express from 'express';
//import fs from 'fs';
import apiRouter from './api';

console.log(config, nodeEnv);

const server = express();

server.set('view engine', 'ejs');
server.get('/', (req, res) => {
    res.send('Hello World');
});

server.use('/api', apiRouter);
server.use(express.static('public'));

/*server.get('/about.html', (req, res) => {
    //res.send('About Page');
    fs.readFile('./about.html', (err, data) => {
        res.send(data.toString());
    });
});*/

server.listen(config.port, () => {
    console.log(`server listening on port ${config.port}`);
});


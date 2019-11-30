import config, {nodeEnv} from './config';
import express from 'express';
//import fs from 'fs';
import apiRouter from './api';
import sassMiddleWare from 'node-sass-middleware';
import path from 'path';
import serverRender from './serverRender';

console.log(config, nodeEnv);

const server = express();
server.use(sassMiddleWare({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
}));
server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    //res.send('Hello World');
    serverRender()
        .then(({initialMarkup, initialData, content}) => {
            console.log('server.js ->' + initialData);
            res.render('index', {
                initialMarkup,
                initialData,
                content,
                contentWithHtml: 'Hello Express and <em>EJS</em>'
            });
        })
        .catch(console.error);
    
});

server.use('/api', apiRouter);
server.use(express.static('public'));

/*server.get('/about.html', (req, res) => {
    //res.send('About Page');
    fs.readFile('./about.html', (err, data) => {
        res.send(data.toString());
    });
});*/

server.listen(config.port, config.host, () => {
    console.log(`server listening on port ${config.port}`);
});


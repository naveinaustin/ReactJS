import express from 'express';
import favicon from 'serve-favicon';
import path from 'path'
import data from './data/data.json';

const app = express();
const PORT = 3000;

//This is for public folder on path /
app.use(express.static('public'));

// Method to use JSON
app.use(express.json());

app.use(express.urlencoded({extended: true}));

//This is for proxies
app.set('trust proxy', 'loopback');

//this is for images folder on path images
app.use('/images', express.static('images'));

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.get('/', (req, res) => {
    //res.send(`a get request with / route on port ${PORT}`);
    res.json(data);
});

app.get('/item', (req, res) => {
   res.redirect('http://www.linkedin.com');
});

app.get('/images', (req, res) => {
    res.download('images/rocket.jpg');
 });

app.get('/item/:id', (req, res, next) => {
    //res.send(`a get request with / route on port ${PORT}`);
    //console.log(req.params.id);
    let user = Number.parseInt(req.params.id);
    //console.log(user);
    //console.log(data[user]);
    //res.json(data[user]);
    res.send(data[user]);
    next();
}, (req, res) => 
        console.log('Did you get the right data?')
);

app.post('/item', (req, res) => {
    //res.send(`a post request with /newItem route on port ${PORT}`);
    //res.send(req.body);
    console.log(req.body);
    res.json(req.body);
});

app.put('/item', (req, res) => {
    res.send(`a put request with /item route on port ${PORT}`);
});

app.delete('/item', (req, res) => {
    res.send(`a delete request with /item route on port ${PORT}`);
});

app.route('/check')
    .get((req, res) => {
        throw new Error();
        res.send(`a get request with /check route on port ${PORT}`);
    })
    .put((req, res) => {
        res.send(`a put request with /check route on port ${PORT}`);
    })
    .delete((req, res) => {
        res.send(`a delete request with /delete route on port ${PORT}`);
    })
    .post((req, res) => {
        res.send(`a post request with /post route on port ${PORT}`);
    });

//Error handling
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send(`Red Alert! ${err.stack}`);
});

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
    //console.log(data);
});


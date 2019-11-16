import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes'

const app = express();
const PORT = 3000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
//Got an error so removed the below line
/*mongoose.connect('mongodb://localhost/CRMdb', {
    useMongoClient: true
});*/

//bodyParser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// service static files
app.use(express.static('public'));

app.get('/', (req, res) => {
   res.send(`Node and express server is running on ${PORT}`); 
});

app.listen(PORT, () => {
    console.log(`your server is runnig on port ${PORT}`);
});
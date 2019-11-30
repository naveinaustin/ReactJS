import axios from 'axios';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import config from './config';
import App from './src/components/App';

/*const serverRender = () =>
    axios.get(`${config.serverUrl}/api/contests`)
        .then(resp => {
            console.log('ddddd');
            console.log(resp.data.contests);
            return {
                initialMarkup: ReactDOMServer.renderToString(<App initialContests={resp.data.contests}/>),
                initialData: resp.data,
                content: "ABCD"
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
*/
const serverRender = () =>
    axios.get(`${config.serverUrl}/api/contests`)
        .then(resp => {
            console.log('ddddd');
            console.log(resp.data.contests);
            return {
                initialMarkup: ReactDOMServer.renderToString(<App initialContests={resp.data.contests}/>),
                initialData: resp.data,
                content: "ABCD"
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
export default serverRender;
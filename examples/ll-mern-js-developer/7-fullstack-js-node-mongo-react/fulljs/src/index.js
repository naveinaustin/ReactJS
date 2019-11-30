import React from 'react';
import ReactDOM  from 'react-dom';

import App from './components/App';
import data from './testData';
import axios from 'axios';
console.log(data);


ReactDOM.render(
    <App initialContests={window.initialData.contests}/>,
    document.getElementById('root')
);



/*setTimeout(() => {
    ReactDOM.render(
        <h2>Changed Header</h2>,
        document.getElementById('root')
    );
}, 4000);*/
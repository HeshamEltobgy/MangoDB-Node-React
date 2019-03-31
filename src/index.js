import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// import data  from './testData.json';


import App from './components/App'


    ReactDOM.hydrate(
    // <App contests = {[]} />,
    <App initialData={window.initialData} />,
      document.getElementById('root')
    );




// setTimeout(() => {
//   ReactDOM.render(
//     <h2>...</h2>,
//     document.getElementById('root')
//   )
// }, 4000)

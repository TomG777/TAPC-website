import React from 'react';
import ReactDOM from 'react-dom';
import WebPages from './WebPages';
import './index.css'
import Banner from './Components/Banner';
ReactDOM.render(
    <React.StrictMode>
        <div style={{margin: '-8px'}}>
            <Banner />
            <WebPages />
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';
import './base.css';
import {App} from './App';
import * as serviceWorker from './serviceWorker';
import * as Sentry from '@sentry/browser';

Sentry.init({
 dsn: "https://a26b0ba4951c4d59b923f03d0f8e5e38@sentry.io/1454736"
});

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
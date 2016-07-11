import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom'
import './index.scss';

render(
    <span>Hello World</span>,
    document.getElementById('app')
);
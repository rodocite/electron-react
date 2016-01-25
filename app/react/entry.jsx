import React, { Component } from 'react';
import { render as renderDOM } from 'react-dom';

import Container from './components/Container.jsx';

renderDOM(<Container />, document.getElementById('react-entry'));

import React from 'react';
import {render} from 'react-dom';
import {Router,hashHistory} from 'react-router';

import routes from './routes.js';
import './styles/common.css';

render(<Router routes={routes} history={hashHistory} />
  ,document.getElementById('root'));

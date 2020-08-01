import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import NewVideo from './pages/add-new/video';
import NewCategory from './pages/add-new/category';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const NotFound = () => (<div>Página 202 * 2</div>)

ReactDOM.render(
  <BrowserRouter>

    <Switch>
      <Route path = "/" component = {Home} exact />
      <Route path = "/add-new/video" component = {NewVideo} />
      <Route path = "/add-new/category" component = {NewCategory} />
      <Route component = {NotFound} />
    </Switch>

  </BrowserRouter>,
  document.getElementById('root')
);
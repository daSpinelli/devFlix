import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import NewVideo from './pages/cadastro/video';
import NewCategory from './pages/cadastro/categoria';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const NotFound = () => (<div>Página 202 * 2</div>)

ReactDOM.render(
  <BrowserRouter>

    <Switch>
      <Route path = "/" component = {Home} exact />
      <Route path = "/cadastro/video" component = {NewVideo} />
      <Route path = "/cadastro/categoria" component = {NewCategory} />
      <Route component = {NotFound} />
    </Switch>

  </BrowserRouter>,
  document.getElementById('root')
);
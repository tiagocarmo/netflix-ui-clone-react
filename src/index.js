import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme-default';
import Browser from './components/pages/Browser';
import NotFound from './components/pages/NotFound';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename='/'>
        <Switch>
          <Route path="/" exact={true} component={Browser} />
          <Route path='*' component={NotFound} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

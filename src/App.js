import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Questions from './pages/Questions';
import GameSettings from './pages/GameSettings';
import Header from './components/Header';
import Footer from './components/Footer';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/trivia" component={ Questions } />
          <Route path="/settings" component={ GameSettings } />
        </Switch>
        <Footer />
      </>
    );
  }
}

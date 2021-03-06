import React from 'react';
// import logo, { ReactComponent } from './logo.svg';
import './App.css';

import TripContainer from './containers/TripContainer';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Error from './components/Error'

class App extends React.Component {



  render(){
    return (
      <div>
        <Switch>
          <Route path="/trips" component={TripContainer} />
          <Route path="/home" component={Home} />
          <Route path="/" component={Error} />
        </Switch>

      </div>
  )
  }
}

export default App;

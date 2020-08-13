import React from 'react';
import './App.css';
// import obtenerSh from './services/obtenerSh'
import { Switch, Route } from 'react-router-dom'
import Home  from './pages/Home'
import Detail from './pages/Detail'


function App() {
  return (
    <div className="App">
      <Switch >
        <Route exact path='/' component={Home} />
        <Route path='/detail/:id' component={Detail} />
      </Switch>    </div>
  );
}

export default App;

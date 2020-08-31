import React from 'react';
import './App.css';
// import obtenerSh from './services/obtenerSh'
import { Switch, Route } from 'react-router-dom'
import Home  from './pages/Home/Home'
import Detail from './pages/Detail/Detail'
import Results from './pages/Results/Results'
import Cover from './components/Cover'
// import PaginationContext from './contexts/PaginationContext'

function App() {
  return (
    <div className="App">
       <Cover />
      <Switch >
        {/* <PaginationContext> */}
        <Route exact path='/' component={Home} />
        <Route path='/search/:name' component={Results} />
        <Route path='/detail/:id' component={Detail} />
        {/* </PaginationContext> */}
      </Switch>    
      </div>
  );
}

export default App;

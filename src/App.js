import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Read from './components/pages/Read';
import Onepiece from './components/blogs/Onepiece';
import Vinland from './components/blogs/Vinland';
import Naruto from './components/blogs/Naruto';
import Fmab from './components/blogs/Fmab';
import Aot from './components/blogs/Aot';
import Haikyu from './components/blogs/Haikyu';

function App() {
  return (
    <>
      <Router>
        
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/read' exact component={Read}/>
          <Route path='/onepiece' exact component={Onepiece}/>
          <Route path='/vinland' exact component={Vinland}/>
          <Route path='/naruto' exact component={Naruto}/>
          <Route path='/aot' exact component={Aot}/>
          <Route path='/fmab' exact component={Fmab}/>
          <Route path='/haikyu' exact component={Haikyu}/>

          
        </Switch>
      </Router>

      
      
    </>
  );
}

export default App;

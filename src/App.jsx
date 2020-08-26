import React from 'react';
import {Route, Switch} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';


function App() {
  const Name = () =>{
    return  <h1>Hello it is Name page</h1>
  }
  return (
    
    <div className="App">
    <Switch>
      <Route exact path='/' component={About}/>
      <Route exact path='/contact' component={Contact}/>
      <Route path='/contact/name' component={Name}/>s
      <Route component={Error}/>
    </Switch>
    
    
     {/*} <About />
      <Contact />*/}
    </div>
  );
}

export default App;

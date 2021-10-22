import NavBar from './components/NavBar';
import Form from './components/Form';
import About from './components/About';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [ dark, setDark ] = useState(0);



  return (
    <Router>
    <NavBar title='Utility' aboutText='About me'/>
      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">      
              <Form title="Enter your text to anaylse:"/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

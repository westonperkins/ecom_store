import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import axios from 'axios'

import Test from './Components/Test'

export const API = process.env.REACT_APP_ENV === 'production'
? 'deployed'
: 'http://localhost:8000'



function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Test}/>
      </div>
    </Router>
  );
}

export default App;

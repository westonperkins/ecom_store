import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"

import Header from './render/Header'

class App extends Component {
    render() {
        return (            
            <Header/>
        )
    }
}

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('app')
);

export default App;
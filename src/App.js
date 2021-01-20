import React, { useEffect } from 'react';
import './App.css';


import { Route, BrowserRouter as Router } from "react-router-dom";



import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Root from './Root';
import RangeDetail from './RangeDetail';
import NavBar from './NavBar';

// Need to do this here to load the icons
library.add(fab, fas);

function App() {

  return (

    <Router>
      <nav>

        <NavBar />
      </nav>
      <div className="container">

        <Route exact path="/RangeDetail" component={RangeDetail} />
        <Route exact path="/" component={Root} />




      </div>
    </Router>
  );
}
export default App;

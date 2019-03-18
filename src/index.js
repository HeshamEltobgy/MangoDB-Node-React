import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import Header from "./components/Header"



const App = () => {
  return (
  <div className="App">
    <Header message="Naming Contests" />
    <div>
    </div>
  </div>
 )
}


ReactDOM.render(


<App />,
  document.getElementById('root')
);

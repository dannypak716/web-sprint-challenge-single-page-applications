import React from "react";
import { Route, Link } from 'react-router-dom';
import Form from './Form';
import Home from './Home';

const App = () => {

  return (
    <div>
      <Route component={Home} exact path={'/'} />
      <Route component={Form} exact path={'/form'} />
    </div>
  );
};
export default App;

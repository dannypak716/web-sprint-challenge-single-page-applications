import React from "react";
import { Route } from 'react-router-dom';
import Form from './Form';
import Home from './Home';

const App = () => {

  return (
    <div>
      <Route component={Home} exact path={'/'} />
      <Route component={Form} exact path={'/pizza'} />
    </div>
  );
};
export default App;

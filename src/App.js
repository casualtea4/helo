import React from 'react';
import Nav from './Components/Nav/Nav';
import routes from './routes';
import {withRouter} from 'react-router-dom';
import './App.css';
// import { tsPropertySignature } from '@babel/types';

function App(props) {
  return (
    <div className="App">
      {props.location.pathname === '/'
      ?(<>
        {routes}
        </>)
      :(<>
        <Nav/>
        {routes}
        </>)}    
    </div>
  );
}

export default withRouter(App);

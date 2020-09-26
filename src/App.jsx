import React from 'react';
import Main from './view/Main'
import { BrowserRouter, Route } from 'react-router-dom';

// import GetAllPeople from './graphql/queries'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Main}/>
      <Route exact path="/:id" component={Main}/>
    </BrowserRouter>
  )
}

export default App;

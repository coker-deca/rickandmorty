import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PageLayout from './components/layouts/PageLayout';
import CharactersPage from './pages/CharactersPage';
import SearchPage from './pages/SearchPage';
import Character from './pages/Character';

function App() {
  return (
    <Router>
      <div className="App">
        <PageLayout>
          <Route path="/characters/:id">
            <Character />
          </Route>
          <Route exact path="/characters">
            <CharactersPage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
        </PageLayout>
      </div>
    </Router>
  );
}

export default App;

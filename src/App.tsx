import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PageLayout from './components/layouts/PageLayout';
import { FetcherProvider } from './context/fetchContext';
import Character from './pages/Character';
import CharactersPage from './pages/CharactersPage';
import SearchPage from './pages/SearchPage';
import LocationsPage from './pages/LocationsPage';
import EpisodesPage from './pages/EpisodePage';

function App() {
  return (
    <FetcherProvider>
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
            <Route path="/locations">
              <LocationsPage />
            </Route>
            <Route path="/episodes">
              <EpisodesPage />
            </Route>
          </PageLayout>
        </div>
      </Router>
    </FetcherProvider>
  );
}

export default App;

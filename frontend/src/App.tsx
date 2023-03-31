import './App.css';
import PodcastPage from './Podcast';
import MovieList from './Movies';
import HomePage from './Home';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/podcasts" element={<PodcastPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

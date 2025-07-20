
import React from 'react';
import { HashRouter, Routes, Route } from './components/routing';
import { GameProvider } from './context/GameContext';
import { HomePage } from './pages/HomePage';
import { MissionSelectPage } from './pages/MissionSelectPage';
import { GamePage } from './pages/GamePage';
import { ScorePage } from './pages/ScorePage';

const App: React.FC = () => {
  return (
    <GameProvider>
      <HashRouter>
        <div className="min-h-screen font-sans">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/missions" element={<MissionSelectPage />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="/score" element={<ScorePage />} />
          </Routes>
        </div>
      </HashRouter>
    </GameProvider>
  );
};

export default App;

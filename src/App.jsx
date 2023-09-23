import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Ranking from './pages/Ranking/Ranking';

function App() {
    return (
        <div id='App'>
            <BrowserRouter>
                <Routes>
                    <Route element={<Home />} path='/' exact />
                    <Route element={<Ranking />} path='/ranking' />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

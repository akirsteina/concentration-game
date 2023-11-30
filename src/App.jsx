
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/home';
import Instructions from './pages/Instructions';
import About from './pages/About';
import Footer from './components/Footer';
import { lazy, Suspense } from 'react';
const GameBoard = lazy(() => import('./pages/GameBoard'));

function App() {
  return <main>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/game' element={<Suspense fallback={<p>Loading...</p>}><GameBoard /></Suspense>} />
      <Route path='/instructions' element={<Instructions />} />
      <Route path='/about' element={<About />} />
    </Routes>
    <Footer />
  </main>
}

export default App;
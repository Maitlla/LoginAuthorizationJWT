import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
import Public from './views/Public/Public';
import Private from './views/Private/Private';
import Authorization from './services/Authorization';
import ContextProvider from './services/ContextProvider';
import Session from './components/Session/Session';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <div class="estructura">
          <header>
            <nav>

              <Navbar />
              <Session />
            </nav>
          </header>
          <hr />
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/public/' element={<Public />} />
              <Route path='/private/' element={<Authorization><Private /></Authorization>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;


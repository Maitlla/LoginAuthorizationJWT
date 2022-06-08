import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
import Public from './views/Public/Public';
import Private from './views/Private/Private';
import Authorization from './services/Authorization';
import ContextProvider from './services/ContextProvider';
import Session from './components/Session/Session';


function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <header>
          <nav>
            
            <Navbar />
            <h1 className='session'>Authorization React example</h1>
            <Session />
          </nav>
        </header>
        <hr />
        <main>
        <p>s</p>
                <p>s</p>
                <p>s</p>
                <p>s</p>
                <p>s</p>
                <p>s</p>
                <p>s</p>
                <p>s</p>
                <p>s</p>
                <p>s</p>
                <p>s</p>
            
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/public/' element={<Public />} />
            <Route path='/private/' element={<Authorization><Private /></Authorization>} />
          </Routes>
        </main>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;


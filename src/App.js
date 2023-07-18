import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Routes , Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Data from './components/Data/Data';
import Ecommerce from './components/Ecommerce/Ecommerce';
import Publishing from './components/Publishing/Publishing';
import Web from './components/Web/Web';
import Photoediting from './components/Photo editing/Photoediting';
import Digitalmarketing from './components/Digital marketing/Digital marketing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Data/>}/>
          <Route path='/Ecommerce' element={<Ecommerce/>}/>
          <Route path='/Publishing' element={<Publishing/>}/>
          <Route path='/Web' element={<Web/>}/>
          <Route path='/Photoediting' element={<Photoediting/>}/>
          <Route path='/Digitalmarketing' element={<Digitalmarketing/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

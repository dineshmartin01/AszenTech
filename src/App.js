import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Routes , Route } from 'react-router-dom';
import Home from './components/Home/Home'
import Data from './components/Data/Data';
import Ecommerce from './components/Ecommerce/Ecommerce';
import Publishing from './components/Publishing/Publishing';
import Web from './components/Web/Web';
import Photoediting from './components/Photo editing/Photoediting';
import Digitalmarketing from './components/Digital marketing/Digital marketing';
import Contact from './Pages/Contact page/contact';
import Datacollection from './components/Headercontent/Datacontent/DataServices/Datacollection/Datacollection';
import Dataextraction from './components/Headercontent/Datacontent/DataServices/Dataextraction/Dataextraction';
import Datamining from './components/Headercontent/Datacontent/DataServices/Datamining/Datamining';
import Listbuilding from './components/Headercontent/Datacontent/DataServices/Listbuilding/Listbuilding';
import Routepath from './components/Routepath/Routepath';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/Data' element={<Data/>}/>
          <Route path='/Ecommerce' element={<Ecommerce/>}/>
          <Route path='/Publishing' element={<Publishing/>}/>
          <Route path='/Web' element={<Web/>}/>
          <Route path='/Photoediting' element={<Photoediting/>}/>
          <Route path='/Digitalmarketing' element={<Digitalmarketing/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Datacollection' element={<Datacollection/>}/>
          <Route path='/Dataextraction' element={<Dataextraction/>}/>
          <Route path='/Datamining' element={<Datamining/>}/>
          <Route path='/Listbuilding' element={<Listbuilding/>}/>   
      
        </Routes>
      </BrowserRouter>
      <Routepath/>
    </div>
  );
}

export default App;

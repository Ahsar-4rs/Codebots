
import './App.css';
import Footer from './components/Footer/Footer.js'
import NavBar from './components/NavBar/NavBar.js'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className='app'>
      
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      
      </div>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;


import './App.css';
import Footer from './components/Footer/Footer.js'
import NavBar from './components/NavBar/NavBar.js'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import ShopCategory from './pages/Inventory/ShopCategory'
import StoreContextProvider from './context/StoreContext.js';
import Bot from './components/Bot/Bot.js';
import ChatbotEmbed from './components/Chatbot/chatbot.js';

function App() {
  return (
    <div className="App">
      <StoreContextProvider>
      <BrowserRouter>
      
      
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />

          <Route path='/kitchen' element={<ShopCategory category='Kitchen'/>}/>
           <Route path='/groceries' element={<ShopCategory category='Groceries'/>}/>
           <Route path='/cosmetics' element={<ShopCategory category='Cosmetics'/>}/>
           <Route path='/beverages' element={<ShopCategory category='Beverages'/>}/>
           <Route path='/snacks' element={<ShopCategory  category='Snacks'/>}/>
           <Route path='/household' element={<ShopCategory category='Household items'/>}/>
           <Route path='/stationaries' element={<ShopCategory  category='Stationeries'/>}/>
           <Route path='/clothes' element={<ShopCategory  category='Clothes'/>}/>
           <Route path='/chatbot' element={<ChatbotEmbed/>}/>
        </Routes>
      
        
      <Footer />
      <Bot/>
      </BrowserRouter>
      </StoreContextProvider>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home'
import Details from './pages/favorites'
import Favorites from './pages/favorites';
import Navbar from './components/navbar';
function App() {
  return (
    <div >
      <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
        <Navbar/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/details'element={<Details/>}/>
        <Route path='/recipe-item/:id'element={<Favorites/>}/>
      </Routes>
      </div>
      
   
        
    </div>
  );
}

export default App;

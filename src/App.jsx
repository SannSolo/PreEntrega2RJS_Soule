import './App.css'
import Navbar from "./components/Navbar"
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Accesorios  from './components/Pages/Accesorios';
import  About  from './components/Pages/About';
import  PrendasI  from './components/Pages/PrendasI';
import  PrendasS  from './components/Pages/PrendasS';
import { CartContext } from './context/cartContext';



function App() {
    return (
        
        <nav>
            <main style={{ width:"100%", height:"100%"}}>

            <CartContext.Provider value={[]}>            
            <BrowserRouter>
            <Navbar />  
            <Routes>
                <Route exact path='/' />
                <Route exact path='/Accesorios' element={ <Accesorios /> }/>
                <Route exact path='/About' element={<About />}/>
                <Route exact path='/PrendasS' element={<PrendasS />} />
                <Route exact path='/PrendasI' element={<PrendasI />} />
                <Route path='*' element={<h1>NO SE ENCONTRO</h1>} />
            </Routes>
            </BrowserRouter>
        

            <ItemListContainer />
            </CartContext.Provider>

            </main>
        </nav>
        
    
    )
}



export default App

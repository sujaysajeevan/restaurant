
import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Allrestaurants from './Components/Allrestaurants/Allrestaurants';
import  ViewRestaurant from './Components/ViewRestaurant'
import {Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
      </header>

      <section>
        <Routes>
          <Route path='/' element={<Allrestaurants/>}/>
          <Route path='/view/:id' element={<ViewRestaurant/>}/>
          
        </Routes>
      </section>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;

import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Nav } from './components/navbar';
import { NavRoutes } from './components/routes';
import { Footer } from './components/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav></Nav>
        <NavRoutes></NavRoutes>
        <Footer></Footer>
        {/* <section class="thissection">
			<div class="container">	
			</div>
			<div class="bottom">
			</div>
		</section> */}
      </BrowserRouter>

    </div>
  );
}

export default App;

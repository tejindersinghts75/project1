import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

import Navigator from './Components/Navigator/Navigator';
import Homepage from './Pages/HomePage/Homepage';
import Header from './Components/Navbar/Navbar'
import ProductPage from './Pages/ProductPage/ProductPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Navigator />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/ProductPage/:id" element={<ProductPage />} />


        </Routes>




      </BrowserRouter>

      

    </div>
  );
}

export default App;

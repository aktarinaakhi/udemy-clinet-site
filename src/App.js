import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Python from './components/courses/Python';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Navigation from './shared/Navigation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>

          <Route exact path="/" element={<Home />}> </Route>
          <Route exact path="home" element={<Home />}> </Route>
          <Route exact path="python" element={<Python />}> </Route>
          <Route exact path="login" element={<Login />}> </Route>
          <Route exact path="register" element={<Register />}> </Route>


        </Routes>

      </BrowserRouter>



    </div>
  );
}

export default App;

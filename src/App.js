import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/components/Home/Home';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;

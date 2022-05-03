import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/components/Home/Home';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Inventory from './components/Inventory/Inventory';
import RequireAuth from './components/RequireAuth/RequireAuth';
import ManageItems from './components/ManageItems/ManageItems';
import AddItem from './components/AddItem/AddItem';
import MyItem from './components/MyItem/MyItem';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>

        <Route path='/inventory/:productId' element={
          <RequireAuth>
            <Inventory />
          </RequireAuth>
        }></Route>

        <Route path='/manageItems' element={<ManageItems />}></Route>
        <Route path='/addItem' element={<AddItem />}></Route>
        <Route path='/myItem' element={<MyItem />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>

        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

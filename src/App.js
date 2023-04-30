import './App.css';
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom';
import Home from './Component/Home';
import Userlisting from './Component/Userlisting';
import Adduser from './Component/Adduser';
import Updateuser from './Component/Updateuser';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from './Redux/Store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BrowserRouter>
      <div className='header'>
        <Link to={'/'}><h4>Home</h4></Link>
        <Link  to={'/user'}><h4>User</h4></Link>
      </div>
      <Routes>
        <Route path ='/' element={<Home />}></Route>
        <Route path ='/user' element={<Userlisting />}></Route>
        <Route path ='/user/add' element={<Adduser />}></Route>
        <Route path ='/user/edit/:code' element={<Updateuser />}></Route>
      </Routes>
      </BrowserRouter>
      <ToastContainer />    
    </div>
    </Provider>
  );
}

export default App;

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header'
import { ToastContainer } from 'react-toastify';

// from App.js, we change route by calling the pages component
// from pages component we manage user input and action to send it to redux store which is located to app/store.js
// also in pages component, we call function in features/${module}/${module}Service.js to fetch API
// in pages component, we also call function from features/${module}/${module}Slice.js to manage status state and dispatch it to reducer in app/store.js

function App() {
  return (
    <>
    <Router>
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
    </Router>
    <ToastContainer />
    </>
  );
}

export default App;

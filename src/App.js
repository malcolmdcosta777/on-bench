import MergeComponents from './components/MergeArray/MergeComponents';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import CountryCode from './components/CountryCode/CountryCode';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/merge' element={<MergeComponents/>} />
      <Route path='/login' element={<LoginForm />} />
      <Route path='/ccode' element={<CountryCode/>} />
      <Route path='*' element={<Home />} />
    </Routes>
  );
}

export default App;

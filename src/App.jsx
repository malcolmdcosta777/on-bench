import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MergeComponents from './components/MergeArray/MergeComponents';
import LoginForm from './components/LoginForm/LoginForm';
import CountryCode from './components/CountryCode/CountryCode';
import DisplayDayDate from './components/DisplayDayDate/DisplayDayDate';
import './assets/styles/main.scss';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/merge' element={<MergeComponents/>} />
      <Route path='/login' element={<LoginForm />} />
      <Route path='/ccode' element={<CountryCode/>} />
      <Route path='/calender' element={<DisplayDayDate/>} />
      <Route path='*' element={<Home />} />
    </Routes>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Watch from './components/Watch';
import Layout from './components/Layout';
import StopWatch from './components/StopWatch';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <div style={{backgroundColor:'#282c34',minHeight:"630px"}}>
    <Layout/>
    <Routes>
      <Route path="/" element={<Watch/>}></Route>
      <Route path="/StopWatch" element={<StopWatch/>}></Route>
    </Routes>
  
  </div>
  </>
  );
}

export default App;

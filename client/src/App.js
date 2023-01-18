import './App.css';
import Beginning from './components/Beginning';
import Home from './components/Home';
import Nav from './components/Nav';
import Detail from './components/Detail';
import CreateForm from './components/CreateForm';
import {Routes, Route, useLocation} from 'react-router-dom'




function App() {
  const location = useLocation()
  return (
    <div className="App">
        {
          location.pathname !== '/' && <Nav/>
        }
        <Routes>
          <Route path="/" element={<Beginning/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/detail" element={<Detail/>} />
          <Route path="/post" element={<CreateForm/>} />
        </Routes>
    </div>
  );
}

export default App;

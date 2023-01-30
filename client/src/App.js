import './App.css';
import Start from './components/Start';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Detail from './components/Detail/Detail';
import CreateForm from './components/Form/CreateForm';
import {Routes, Route, useLocation} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getDogs, getTemperaments } from './redux/actions'
import { useEffect } from 'react';
import axios from 'axios'

function App() {
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getDogs())
    dispatch(getTemperaments())
  })  

  return (
    <div className="App">
        {
          location.pathname !== '/' && <Nav/>
        }
        <Routes>
          <Route path="/" element={<Start/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/detail/:detailId" element={<Detail/>} />
          <Route path="/post" element={<CreateForm/>} />
        </Routes>
    </div>
  );
}

export default App;

import { BrowserRouter as Router } from 'react-router-dom'
import AllRoutes from './AllRoutes';
import {  useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { fetchAllQuestions } from './actions/question'
import { fetchAllUsers } from './actions/users';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  }, [dispatch])
  return (
    <div className="App">
      <Router>
         <Navbar />
         <AllRoutes />
      </Router>
      {/* <h1>Stack overflow Clone</h1> */}
    </div>
  );
}
export default App;

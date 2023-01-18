import Home from './Home.js';
import './App.css';
import { BrowserRouter, Router, Route, Routes } from 'react-router';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

function App() {
  return (
    <div className="App">
      <Home />
      {/* <Router>
        <Routes>
            <Route exact path='/' component={Home} />
            <Route path='/' component={EditUser} />
            <Route path='/' component={AddUser} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;

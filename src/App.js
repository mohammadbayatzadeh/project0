import './App.css';
import { Route, Routes } from "react-router-dom"

//components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Companies from './components/Companies';

function App() {
  return (
    <div className="App" >
    <Navbar />
    <Sidebar/>
    <Routes>
      <Route path="/companies" element={<Companies />} />
    </Routes>
    </div>
  );
}

export default App;

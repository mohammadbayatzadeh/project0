import './App.css';
import { Route, Routes } from "react-router-dom"

//components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Companies from './components/Companies';
import ApiContextProvider from "./server/ApiContextProvider"

function App() {
  return (
    <div className="App" >
    <Navbar />
    <Sidebar/>
    <ApiContextProvider>
    <Routes>
      <Route path="/companies" element={<Companies />} />
    </Routes>
    </ApiContextProvider>
    </div>
  );
}

export default App;

import "./App.css";
import { Routes, Route } from "react-router";

import AddEmployee from "./pages/AddEmployee/addEmployee";
import Login from "./pages/Login/login";
import Home from "./pages/Home/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-employee" element={<AddEmployee />} />
      </Routes>
    </div>
  );
}

export default App;

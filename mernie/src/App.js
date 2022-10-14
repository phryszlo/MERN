import './App.css';
import './style.css'
import { useState, useEffect } from "react";
// import routes to use with the ROUTER from the index.js
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
// import SignUpForm from './components/SignUpForm';
import AuthPage from "./pages/AuthPage";
import NewOrderPage from "./pages/NewOrderPage";
import OrderHistoryPage from "./pages/OrderHistoryPage";

function App() {
  const [user, setUser] = useState();
  
  return (
    <main className="App">
      {user ? (<>
        <NavBar />
        <Routes>
          {/* <Route path="/" element={<Navigate to="/orders" />} /> */}
          <Route path="/orders" element={<OrderHistoryPage />} />
          <Route path="/orders/new" element={<NewOrderPage />} />
        </Routes>
      </>
      ) : (
        <AuthPage />
      )}
    </main>
  );
}

export default App;

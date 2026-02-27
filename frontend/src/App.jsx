import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={
            <div className="login-page">
              <Login />
            </div>
          }
        />

        <Route
          path="/signup"
          element={
            <div className="login-page">
              <Signup />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;

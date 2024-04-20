import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewBook from "./pages/NewBook";
import PrivateRoute from "./components/PrivateRoute";
import EditBook from "./pages/EditBook";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/newbook"
          element={
            <PrivateRoute>
              <NewBook />
            </PrivateRoute>
          }></Route>
        <Route
          path="/editbook/:id"
          element={
            <PrivateRoute>
              <EditBook />
            </PrivateRoute>
          }></Route>
      </Routes>
    </Router>
  );
}

export default App;

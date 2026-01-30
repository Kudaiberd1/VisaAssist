import {Route, Routes} from "react-router-dom";
import LandingPage from "../pages/LandingPage.tsx";
import MyTrips from "../pages/MyTrips.tsx";
import PremiumPage from "../pages/PremiumPage.tsx";
import Login from "../pages/Login.tsx";
import Register from "../pages/Register.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";

function App() {

  return (
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<MyTrips />} />
          </Route>
          <Route path="/premium" element={<PremiumPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Routes>
  )
}

export default App

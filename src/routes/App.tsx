import {Route, Routes} from "react-router-dom";
import LandingPage from "../pages/LandingPage.tsx";
import MyTrips from "../pages/MyTrips.tsx";
import PremiumPage from "../pages/PremiumPage.tsx";
import Login from "../pages/Login.tsx";
import Register from "../pages/Register.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";
import TripPersonalInfo from "../pages/NewTripFormPage/TripPersonalInfo.tsx";
import TripVisaDetails from "../pages/NewTripFormPage/TripVisaDetails.tsx";
import TripSituation from "../pages/NewTripFormPage/TripSituation.tsx";
import OnboardingCheck from "../pages/OnboardingCheck.tsx";
import Profile from "../pages/Profile.tsx";

function App() {

  return (
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<MyTrips />} />
            <Route path={"/new-trip/:id/personal"} element={<TripPersonalInfo />} />
            <Route path={"/new-trip/:id/visa"} element={<TripVisaDetails />} />
            <Route path={"/new-trip/:id/situation"} element={<TripSituation />} />
            <Route path={"/dashboard/:id"} element={<OnboardingCheck />} />
            <Route path={"/profile"} element={<Profile />} />
          </Route>
          <Route path="/premium" element={<PremiumPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Routes>
  )
}

export default App

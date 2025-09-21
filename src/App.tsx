import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingScreen from "./Screens/LandingScreen";
import SignupScreen from "./Screens/SignupScreen";
import LoginScreen from "./Screens/LoginScreen";
import ProfileScreen from "./Screens/ProfileScreen";

function App() {
  return (
    <div className="flex justify-center min-h-screen font-roboto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

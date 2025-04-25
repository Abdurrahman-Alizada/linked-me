import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Started from "./components/Started";
import RealTimeAnalyticsHero from "./components/RealTimeAnalyticsHero";
import AddSocialMedia from "./pages/AddSocialMedia";
import Otp from "./pages/Otp";
import Login from "./pages/Login";
import LinkInBio from "./components/LinkInBio/LinkInBio";
import BiogramProfile from "./pages/BiogramProfile";
import BiogramShoutPage from "./pages/BiogramShoutPage";
import Forpeople from "./pages/Forpeople";
import BiogramPricing from "./pages/BiogramPrincing"; // Import the BiogramPricing component

const App = () => {
  return (
    <div className="App flex items-center justify-center min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Started />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forpeople" element={<Forpeople />} />
          <Route path="/linkinbio" element={<LinkInBio />} />
          <Route path="/Otp" element={<Otp />} />
          <Route path="/SocialMedia" element={<AddSocialMedia />} />
          <Route path="/biogram-profile" element={<BiogramProfile />} />
          <Route path="/biogram-shout" element={<BiogramShoutPage />} />
          <Route path="/realtimeanalytics" element={<RealTimeAnalyticsHero />} />
          <Route path="/pricing" element={<BiogramPricing />} /> 
        </Routes>
      </Router>
    </div>
  );
};

export default App;

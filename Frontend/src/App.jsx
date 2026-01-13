import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup page/signup.jsx";
import LoginForm from "./pages/loginpages/studentlogin.jsx";
import ForgotPassword from "./pages/forgot page/fogotpassword.jsx";
import LandingPage from "./pages/homepage/landingpage.jsx";
import Homepage from "./pages/loginpages/homepage.jsx";

function App() {
  return (
   
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/studentLogin" element={<LoginForm />} />
        {/* <Route path="/forgotpassword" element={<Signup/>} /> */}
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/studentLogin" element={<LoginForm />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/landingpage" element={<LandingPage/>}/>
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </Router>
  
  );
}

export default App;


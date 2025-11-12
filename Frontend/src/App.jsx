import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup page/signup.jsx";
import LoginForm from "./pages/loginpages/studentlogin.jsx";
import ForgotPassword from "./pages/forgot page/fogotpassword.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/studentLogin" element={<LoginForm />} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
      </Routes>
    </Router>
  );
}

export default App;

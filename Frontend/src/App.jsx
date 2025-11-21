import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup page/signup.jsx";
import LoginForm from "./pages/loginpages/studentlogin.jsx";
<<<<<<< Updated upstream
import ForgotPassword from "./pages/forgot page/fogotpassword.jsx";

=======
// import Homepage from "./pages/loginpages/homepage.jsx";
>>>>>>> Stashed changes

function App() {
  return (
    <Router>
      <Routes>
<<<<<<< Updated upstream
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/studentLogin" element={<LoginForm />} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
=======
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/studentLogin" element={<LoginForm />} />
        
        {/* <Route path="/homepage" element={<Homepage />} /> */}
>>>>>>> Stashed changes
      </Routes>
    </Router>
  );
}

<<<<<<< Updated upstream
export default App;
=======
export default App;
>>>>>>> Stashed changes

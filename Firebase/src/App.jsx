import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './Firebash/SignIn';
import SignUp from './Firebash/SignUp';
import Dashboard from './Firebash/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
      </Routes>
    </Router>
  );
}

export default App;

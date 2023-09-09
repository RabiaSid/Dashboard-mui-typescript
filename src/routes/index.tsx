import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import SignIn from '../pages/auth/sign-in';
import SignUp from '../pages/auth/sign-up';


export default function AppRouter() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="dashboard/*" element={<Dashboard />} />
        </Routes>
    </Router>
    </>
  )
}

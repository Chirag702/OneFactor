import { useEffect } from 'react';
import { useNavigate, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import RSignup from './res/views/take/auth/RSignup';
import RSignin from './res/views/take/auth/RSignin';
import Dashboards from './res/views/take/dashboard/Dashboards';
import HomeScreen from './res/views/homepage/HomeScreen';
import InitProfile from './res/views/take/profile/InitProfile';
import VerifyOtp from './res/views/take/profile/VerifyOtp';
import PrivateRoute from './PrivateRoute';
import RequestForm from './res/views/give/RequestForm';
import Success from './res/views/give/Success';
import JobDetails from './res/views/take/dashboard/JobDetails';
import Terms from './res/views/common/Terms';
import PrivacyPolicy from './res/views/common/PrivacyPolicy';
import RForgot from './res/views/take/auth/RForgot';
import RReset from './res/views/take/auth/RReset';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to check token existence
  const checkToken = () => localStorage.getItem('token');
  const checkIsEmailVerified = () => localStorage.getItem("isEmailVerified") || false;

  const redirectAfterLogin = location.state?.from || '/home'; // Check if there's a redirect route stored

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={checkToken() ? <Navigate to={redirectAfterLogin} /> : <HomeScreen />} />
      <Route path="/r/signup" element={checkToken() ? <Navigate to={redirectAfterLogin} /> : <RSignup />} />
      <Route path="/r/signin" element={checkToken() ? <Navigate to={redirectAfterLogin} /> : <RSignin />} />
      <Route path="/r/forgot" element={checkToken() ? <Navigate to={redirectAfterLogin} /> : <RForgot />} />
      <Route path="/r/reset/password/:token" element={checkToken() ? <Navigate to={redirectAfterLogin} /> : <RReset />} />

      {/* Protected Routes (using PrivateRoute) */}
      <Route
        path="/initProfile"
        element={
          <PrivateRoute>
            <InitProfile />
          </PrivateRoute>
        }
      />

      <Route
        path="/verifyOtp"
        element={
          <PrivateRoute>
            <VerifyOtp />
          </PrivateRoute>
        }
      />

      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Dashboards />
          </PrivateRoute>
        }
      />

      <Route
        path="/referrer/form"
        element={
          <PrivateRoute>
            <RequestForm />
          </PrivateRoute>
        }
      />

      <Route
        path="/job/details/:jobId"
        element={
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        }
      />
      <Route
        path="/referrer/success"
        element={
          <PrivateRoute>
            <Success />
          </PrivateRoute>
        }
      />
      <Route
        path="/terms"
        element={

          <Terms />
        }
      />
      <Route
        path="/privacy"
        element={

          <PrivacyPolicy />
        }
      />


    </Routes>
  );
}

export default App;

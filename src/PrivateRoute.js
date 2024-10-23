const PrivateRoute = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const getUserData = async () => {
            const token = localStorage.getItem('token');

            if (!token) {
                setError('No token found');
                setLoading(false);
                // Store the attempted URL in the state and redirect to login
                navigate('/r/signin', { state: { from: location.pathname } });
                return;
            }

            try {
                const data = await fetchUserData(token);
                setUserData(data);
                localStorage.setItem('isEmailVerified', data.isEmailVerified ? 'true' : 'false');
            } catch (err) {
                setError(err.message);
                localStorage.clear(); // Clear localStorage on error (like invalid token)
                navigate('/r/signin', { state: { from: location.pathname } });
            } finally {
                setLoading(false);
            }
        };

        getUserData();
    }, [navigate, location.pathname]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return null;
    }

    if (!userData) {
        localStorage.clear();
        navigate('/r/signin', { state: { from: location.pathname } });
        return null;
    }

    const { fname, lname, gender } = userData;
    const isEmailVerified = localStorage.getItem('isEmailVerified') === 'true';

    if (location.pathname === '/verifyOtp') {
        if (!isEmailVerified) {
            return children;
        }
        return <Navigate to="/home" replace />;
    }

    if (location.pathname === '/initProfile') {
        if (!isEmailVerified) {
            return <Navigate to="/verifyOtp" replace />;
        }
        if (fname && lname && gender) {
            return <Navigate to="/home" replace />;
        }
        return children;
    }

    if (!fname || !lname || !gender) {
        return <Navigate to="/initProfile" replace />;
    }

    return children;
};

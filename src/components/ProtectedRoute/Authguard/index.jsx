import { Navigate } from 'react-router-dom';

function AuthGuard({authenticated, children}) {
    if (!authenticated) {
        return <Navigate to="/" replace />;
    }
    return children;
};

export default AuthGuard;
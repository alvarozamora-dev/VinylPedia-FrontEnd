import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  redirectPath?: string;
}

export function ProtectedRoute({ isAuthenticated, redirectPath = '/' }: ProtectedRouteProps) {
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  // Outlet es donde se renderizan las rutas privadas fijadas como hijas
  return <Outlet />;
}

import { useAuth } from '../context/AuthContext';

export const useAuthStatus = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated;
};
import { Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { initialise, setSession } from "../data/slices/authSlice";
import { useEffect } from "react";
import useIsMountedRef from "../hooks/useIsMounted";
import axiosInstance from "../utils/axios";

const AuthGuard = ({ children }) => {
  const isMounted = useIsMountedRef();
  const dispatch = useDispatch();
  const { search } = useLocation();
  const { isAuthenticated } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!isMounted.current) return;
    if (search) {
      const switchToken = search.split("=")?.[search.split("=")?.length - 1];
      (async () => {
        try {
          if (switchToken) {
            setSession(switchToken);
            const response = await axiosInstance.get("/api/profile/me");
            const user = response.data.payload;
            dispatch(initialise({ isAuthenticated: true, user }));
          } else {
            dispatch(initialise({ isAuthenticated: false, user: null }));
            setSession();
          }
        } catch (err) {
          setSession();
          dispatch(initialise({ isAuthenticated: false, user: null }));
        }
      })();
    }
  }, []);
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" />;
  }

  return <>{children}</>;
};

export default AuthGuard;

import { Navigate } from 'react-router-dom';
import { useContext } from "react";
import SearchContext from "../context/SearchContext";

const ProtectedRoute = ({ children, redirectTo }) => {
    const {user} = useContext(SearchContext);

  return user ? (
    children
  ) : (
    <Navigate to={redirectTo}/>
  );
};

export default ProtectedRoute;
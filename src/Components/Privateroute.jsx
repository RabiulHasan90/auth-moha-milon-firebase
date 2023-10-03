import React, { useContext } from 'react'
import { AuthContext } from './Authprovider/Authprovider'
import { Navigate } from 'react-router-dom';

export default function Privateroute({ children }) {
   const { user, loader } = useContext(AuthContext)
   if (loader) {
      return <span className="loading loading-spinner loading-lg"></span>
   }
   if (user) {
      return children;
   }
   
  return <Navigate to="/login"></Navigate>
}

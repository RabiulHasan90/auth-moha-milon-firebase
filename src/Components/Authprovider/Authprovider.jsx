import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types'
import auth from "../Firebase/firebase.config"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"

 export const AuthContext = createContext(null)

export default function Authprovider({ children }) {
   const [user, setUser] = useState(null)
   const [loader, setLoader] = useState(true)
   const createUser = (email, password) => {
       setLoader(true)
      return createUserWithEmailAndPassword(auth, email, password)
     
   }
   const signInUser = (email, password) => {
       setLoader(true)
      return signInWithEmailAndPassword(auth, email, password)
      
   }
   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
         setUser(currentUser)
          setLoader(false)
      });
      return  () => {
         unSubscribe();
      }
   }, [])
   const signUp = () => {
       setLoader(true)
      return signOut(auth);
       
   }
   
   const authinfo ={user, createUser, signInUser,loader, signUp}
  return (
     <AuthContext.Provider value={authinfo}>
        {children}
    </AuthContext.Provider>
  )
}
Authprovider.propTypes = {
   children: PropTypes.node,

}

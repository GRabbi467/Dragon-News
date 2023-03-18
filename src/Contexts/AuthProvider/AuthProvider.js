import React from 'react';
import { createContext, useState, useEffect } from 'react';
import {getAuth, onAuthStateChanged, signInWithPopup} from 'firebase/auth';
import app from '../../firebase/firebase.config';


export const AuthContext  =  createContext();
const auth = getAuth(app);




const AuthProvider = ({children}) => {


   const [user,setUser] = useState('');

   const googleSignup = (provider)=>{
      return signInWithPopup(auth,provider);
   }

   useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
      console.log(currentUser);
         setUser(currentUser);
      });
      return ()=>{
         unsubscribe();
      }
   },[])

    const user2 = {name: 'Rabbi'}
    return (
       <AuthContext.Provider value = {{user,user2,googleSignup,user}}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;
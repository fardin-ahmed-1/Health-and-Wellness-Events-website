import React, { createContext, useEffect, useState } from 'react'
import { useAuth } from './firebase.confige'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail, signOut,updateProfile  } from 'firebase/auth'


export const contextProvider=createContext(null)
const ContextApp = ({children}) => {
    
    const [user, setUser]=useState(null)
    const [loading, setLoading]=useState(true)


    const createUser=(email, password)=>{
      setLoading(true)
        return createUserWithEmailAndPassword(useAuth, email, password)
    }

    const googleSingUp=(googleProvider)=>{
      setLoading(true)
      return signInWithPopup(useAuth, googleProvider)
    }

    const gitHubLogin =(gitHubProvider) =>{
      setLoading(true)
      return signInWithPopup(useAuth, gitHubProvider)

    }
    const updateUser = ({name,profile})=>{
      return updateProfile(useAuth.currentUser,{
        displayName: name,
        photoURL:profile
        
      })
      
    }

    const login=(email, password)=>{
      setLoading(true)
      return signInWithEmailAndPassword(useAuth, email, password)
    }
    const forgotePassword=(email)=>{
      setLoading(true)
      return sendPasswordResetEmail(useAuth, email)
    }

    const logOut=()=>{
      return signOut(useAuth)
  }

    useEffect(()=>{
      const unsubcribe= onAuthStateChanged(useAuth, currectUser=>{
        setUser(currectUser)
        setLoading(false)
      })
      return ()=>{unsubcribe()}
    },[])


    const authInfo={user, updateUser, createUser, googleSingUp,forgotePassword, gitHubLogin,logOut, login, loading}
  return (
    <contextProvider.Provider value={authInfo}>
        {children}
    </contextProvider.Provider>
  )
}
export default ContextApp
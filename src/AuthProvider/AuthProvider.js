import React from 'react';
import { createContext } from 'react';
import app from '../firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth,onAuthStateChanged,signInWithEmailAndPassword,signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import { useState } from 'react';
import { useEffect } from 'react';

export const authContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const userSignIn = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const updateUserProfile = (profile)=> {
        return updateProfile(auth.currentUser, profile);
    }
    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=> {
            unsubscribe();
        }
    },[]);


    const authInfo = {user,loading,userSignIn,providerLogin,logout,createUser,updateUserProfile};

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
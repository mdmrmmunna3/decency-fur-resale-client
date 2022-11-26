import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // signup with googlepop 
    const googleProvider = new GoogleAuthProvider();
    const googleSignUp = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // create user with email and password 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login in with email and password 
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout 
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // Third Party: set observer in useEffect  and use any auth conditon for login and logout
    useEffect(() => {
        const unsubsrcibe = onAuthStateChanged(auth, (currentUser) => {
            // console.log('user observing ');
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubsrcibe();
    }, [])

    const authInfo = {
        user,
        googleSignUp,
        createUser,
        logIn,
        logOut,
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
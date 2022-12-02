import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userRoleInfo, setUserRoleInfo] = useState({});

    useEffect(()=> {
        fetch(`http://localhost:5000/allusers/userInfo?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setUserRoleInfo(data)
        })
    } ,[user?.email])


    // signup with googlepop 
    const googleProvider = new GoogleAuthProvider();
    const googleSignUp = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // create user with email and password 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login in with email and password 
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

     // updateUser
     const updateUser = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photo,
        });
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
        loading,
        googleSignUp,
        createUser,
        logIn,
        logOut,
        updateUser,
        setLoading,
        userRoleInfo,
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
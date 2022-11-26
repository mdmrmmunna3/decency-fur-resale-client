import React, { createContext, useState } from 'react';
import app from '../../firebase/firebase.config';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    // signup with googlepop 
    const googleProvider = new GoogleAuthProvider();
    const googleSignUp = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const authInfo = {
        user,
        googleSignUp,
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
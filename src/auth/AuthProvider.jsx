import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "./firebase.config";



export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (name, photo) =>{
        console.log('from update', name, photo);
        return updateProfile(auth.currentUser, {
            displayName : name,
            photoURL : photo
        });
    }

    const loginUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logoutUser = () =>{
        setLoading(true);
        return signOut(auth);
    }





    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('Current user', currentUser);
            setLoading(false);
        })

        return () => unsubscribe();
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logoutUser,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;
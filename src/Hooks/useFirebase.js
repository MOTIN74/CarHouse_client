import initAuth from "../Firebase/init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider,updateProfile , signOut } from "firebase/auth";

import { useEffect, useState } from "react";

initAuth()

const useFirebase = () => {

    const [user,setUser] = useState({})
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    // const [admin, setAdmin] = useState(false)

    const[administrator, setAdministrator] = useState(false)


    // providers 
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const registerUser = (email, password,name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = {email, displayName: name}
                setUser(newUser)
       // save user to database   
            saveUser(email, name, 'POST')
                
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {
                    
                  }).catch((error) => {
                    
                  });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
        
          const user = result.user;
          saveUser(user.email, user.displayName, 'PUT')
          setAuthError('');
          const destination = location?.state?.from || '/';
                history.replace(destination);
        }).catch((error) => {
          
            setAuthError(error.message);
        }).finally(() => setIsLoading(false));
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
          });
          return () => unsubscribe;
    },[])

   

    useEffect( () => { 
        fetch(`https://shrouded-wildwood-42642.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdministrator(data.administrator))
    },[user.email])







      const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            
        })
        .finally(() => setIsLoading(false))
      }
      const saveUser = (email, displayName, method) => {
        const user = {email, displayName};
        fetch('https://shrouded-wildwood-42642.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }

    return {
        user,
        // admin,
        administrator,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logOut,
    }
};

export default useFirebase;
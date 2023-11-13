import { createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  GithubAuthProvider,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

import auth from '../config/firebase.config';
import axios from 'axios';

export const AuthContext = createContext({
  loading: null,
  user: null,
  signInWithGoogle: () => {},
  signInWithGithub: () => {},
  createUser: () => {},
  updateProfileInfo: () => {},
  signIn: () => {},
  logOut: () => {},
});

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateProfileInfo = (photoURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, photoURL);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const signInWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        axios
          .post('https://kola-server.vercel.app/jwt', loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log('Token Response : ', res.data);
          });
      } else {
        axios
          .post('https://kola-server.vercel.app/logout', loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          });
      }
    });
    return () => {
      unSubscribe();
    };
  }, [user]);

  const authInfo = {
    loading,
    user,
    signInWithGoogle,
    signInWithGithub,
    createUser,
    updateProfileInfo,
    signIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

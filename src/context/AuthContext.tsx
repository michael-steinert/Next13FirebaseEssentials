import {
  Auth,
  getAuth,
  onAuthStateChanged,
  Unsubscribe,
  User,
} from 'firebase/auth';
import { Context, createContext, ReactNode, useEffect, useState } from 'react';
import firebaseApp from '../firebase/config';

export type AuthContextType = {
  user: User | null;
};

const auth: Auth = getAuth(firebaseApp);

export const AuthContext: Context<AuthContextType> =
  createContext<AuthContextType>({
    user: null,
  });

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe: Unsubscribe = onAuthStateChanged(
      auth,
      (user: User | null) => {
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }
        setLoading(false);
      }
    );
    // Function to clean up any Side Effects that were created by the `useEffect`
    // The Function is called when the Component unmounts, or when the `useEffect is about to be re-run due to a change in its Dependencies
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};

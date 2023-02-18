import {
  Auth,
  getAuth,
  signInWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth';
import firebaseApp from '../config';

const auth: Auth = getAuth(firebaseApp);

const signIn = async (
  email: string,
  password: string
): Promise<{
  result: UserCredential | null;
  error: unknown;
}> => {
  let result: UserCredential | null = null;
  let error: unknown;
  try {
    // Method to sign in a Users
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (err: unknown) {
    error = err;
  }

  return { result, error };
};

export default signIn;

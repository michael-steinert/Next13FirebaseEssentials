import firebaseApp from '../config';
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  UserCredential,
} from 'firebase/auth';

const auth: Auth = getAuth(firebaseApp);

const signUp = async (
  email: string,
  password: string
): Promise<{
  result: UserCredential | null;
  error: unknown;
}> => {
  let result: UserCredential | null = null;
  let error: unknown;
  try {
    // Method to sign up new Users
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (err: unknown) {
    error = err;
  }

  return { result, error };
};

export default signUp;

import firebaseApp from '../config';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const fireStore = getFirestore(firebaseApp);

const addData = async (
  collection: string,
  data: { name: string }
): Promise<{
  result: unknown | null;
  error: unknown | null;
}> => {
  let result: unknown | null = null;
  let error: unknown | null = null;

  try {
    result = await setDoc(doc(fireStore, collection), data, {
      merge: true,
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
};

export default addData;

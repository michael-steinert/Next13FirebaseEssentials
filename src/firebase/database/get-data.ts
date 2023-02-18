import firebaseApp from '../config';
import {
  getFirestore,
  doc,
  getDoc,
  DocumentData,
  DocumentReference,
} from 'firebase/firestore';

const db = getFirestore(firebaseApp);

const getDocument = async (
  collection: string,
  id: string
): Promise<{
  result: unknown | null;
  error: unknown | null;
}> => {
  let docRef: DocumentReference<DocumentData> = doc(db, collection, id);
  let result: unknown | null = null;
  let error: unknown | null = null;
  try {
    result = await getDoc(docRef);
  } catch (err) {
    error = err;
  }
  return { result, error };
};

export default getDocument;

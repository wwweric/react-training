import { addDoc, collection, getDocs, getFirestore, serverTimestamp } from 'firebase/firestore';
import { Post } from '../../types/post';
export type Params = {
  title: string;
  body: string;
};
export const createPost = async ({ title, body }: Params): Promise<Post> => {
  const db = getFirestore();
  const createAt = serverTimestamp();
  const updateAt = createAt;
  const docRef = await addDoc(collection(db, 'posts'), {
    title,
    body,
    createAt,
    updateAt,
  });
  return {
    id: docRef.id,
    title,
    body,
    createAt,
    updateAt,
  };
};

export const getPosts = async () => {
  const db = getFirestore();
  const querySnapshot = await getDocs(collection(db, 'posts'));
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

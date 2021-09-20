import { FieldValue } from 'firebase/firestore';

export type Post = {
  id: string;
  title: string;
  body: string;
  createAt: FieldValue;
  updateAt: FieldValue;
};

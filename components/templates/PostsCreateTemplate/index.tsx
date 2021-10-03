import { createPost } from '../../../firebase/posts';
import { useState, useRef } from 'react';
import { Post } from '../../../types/post';

export const PostCreateTemplate = () => {
  const [createdPost, setCreatedPost] = useState<Post>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);

  const submit = async (title: string, body: string) => {
    setIsLoading(true);
    const response = await createPost({ title, body });
    setIsLoading(false);
    setCreatedPost(response);
  };

  const hoge = async () => {
    if (!titleRef.current || !bodyRef.current) return;
    const title = titleRef.current.value;
    const body = bodyRef.current.value;
    if (title === '' || body === '') {
      alert('必須項目が抜けてます');
      return;
    }
    submit(title, body);
  };

  return (
    <>
      {isLoading && <div>loading...</div>}
      <div>
        タイトル
        <br />
        <input ref={titleRef} type='text' name='' id='' required />
      </div>

      <div>
        本文
        <br />
        <textarea ref={bodyRef} required></textarea>
      </div>
      <div>
        画像
        <input type='file' name='' id='' />
      </div>
      <button onClick={hoge}>投稿</button>
      {createdPost && <div>{createdPost.title}</div>}
    </>
  );
};

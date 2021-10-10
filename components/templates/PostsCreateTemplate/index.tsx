import { createPost } from '../../../firebase/posts';
import { useState, useRef } from 'react';
import { Post } from '../../../types/post';
import { Container, PostArea, Head, InputTitle, InputText, ButtonArea, Button } from './styles';

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
    <Container>
      {isLoading && <div>loading...</div>}
      <PostArea>
        <Head>タイトル：</Head>
        <InputTitle ref={titleRef} type='text' name='' id='' required />
      </PostArea>

      <PostArea>
        <Head>本文：</Head>
        <InputText ref={bodyRef} rows={4} required></InputText>
      </PostArea>
      <PostArea>
        <Head>画像：</Head>
        <input type='file' name='' id='' />
      </PostArea>
      <ButtonArea>
        <Button onClick={hoge}>投稿</Button>
      </ButtonArea>
      {createdPost && <div>{createdPost.title}を投稿しました</div>}
    </Container>
  );
};

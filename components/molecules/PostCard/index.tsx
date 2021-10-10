import { Post } from '../../../types/post';
import { Container } from './styles';
type Props = {
  post: Post;
};

export const PostCard = ({ post }: Props) => {
  return (
    <Container>
      <div>title：{post.title}</div>
      <div>本文：{post.body}</div>
    </Container>
  );
};

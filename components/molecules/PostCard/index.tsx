import { Post } from '../../../types/post';
import { Container } from './styles';
type Props = {
  post: Post;
};

export const PostCard = ({ post }: Props) => {
  return <Container>{post.title}</Container>;
};

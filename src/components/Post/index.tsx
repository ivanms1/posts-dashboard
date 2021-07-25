import Image from "next/image";

import ActionButtons from "./ActionButtons";

import AuthorBox from "./AuthorBox";
import Comments from "./Comments";

import styles from "./Post.module.scss";

export interface Post {
  post: {
    id: number;
    title: string;
    content: string;
    image_urls: any[];
    viewCount: number;
    upvoteCount: number;
    commentCount: number;
    category: {
      id: number;
      label: string;
    };
    user: {
      id: number;
      image_url: any;
      nick_name: string;
      skin_type: string;
    };
    createdAt: string;
  };
}

function Post({ post }: Post) {
  return (
    <div className={styles.Post}>
      <p className={styles.Category}>{post.category.label}</p>
      <AuthorBox
        user={post.user}
        createdAt={post.createdAt}
        viewCount={post.viewCount}
      />
      <p className={styles.Title}>{post.title}</p>
      <p className={styles.Content}>{post.content}</p>
      <div className={styles.ImagesContainer}>
        {post?.image_urls?.map((image) => (
          <Image
            className={styles.Image}
            key={image}
            src={image}
            alt={image}
            width={328}
            height={328}
          />
        ))}
      </div>
      <ActionButtons upvoteCount={post?.upvoteCount} />
      <Comments />
    </div>
  );
}

export default Post;

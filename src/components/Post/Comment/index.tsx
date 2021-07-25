import React from "react";
import Image from "next/image";

import Button from "../../Button";
import AuthorBox from "../AuthorBox";

import UpvoteIcon from "../../../assets/icons/upvote.svg";
import ReplyIcon from "../../../assets/icons/reply.svg";

import styles from "./Comment.module.scss";

interface Comment {
  comment: {
    id: number;
    content: string;
    image_urls: any[];
    upvoteCount: number;
    commentCount: number;
    user: {
      id: number;
      image_url: any;
      nick_name: string;
      skin_type: string;
    };
    createdAt: string;
    replies: any[];
  };
}

function Comment({ comment }: Comment) {
  return (
    <div className={styles.Comment}>
      <AuthorBox user={comment.user} createdAt={comment.createdAt} />
      <div className={styles.Content}>{comment?.content}</div>
      {!!comment?.image_urls?.length && (
        <div className={styles.ImagesContainer}>
          {comment?.image_urls?.map((image) => (
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
      )}
      <div className={styles.ActionButtons}>
        <Button type="button" className={styles.ActionButton} icon={UpvoteIcon}>
          {comment.upvoteCount}
        </Button>
        <Button type="button" className={styles.ActionButton} icon={ReplyIcon}>
          Reply
        </Button>
      </div>
      {!!comment?.replies?.length &&
        comment.replies.map((reply) => (
          <div className={styles.Replies} key={reply.id}>
            <Comment comment={reply} />
          </div>
        ))}
    </div>
  );
}

export default Comment;

import React from "react";

import Comment from "../Comment";

import { COMMENTS } from "../../../const";

import styles from "./Comments.module.scss";

function Comments() {
  return (
    <div className={styles.Comments}>
      <div className={styles.TotalBox}>{COMMENTS.length} Comments</div>
      <div className={styles.CommentsContainer}>
        {COMMENTS.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}

export default Comments;

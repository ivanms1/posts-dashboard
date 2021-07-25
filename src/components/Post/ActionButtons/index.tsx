import Button from "../../Button";

import UpvoteIcon from "../../../assets/icons/upvote.svg";
import BookmarkIcon from "../../../assets/icons/bookmark.svg";

import styles from "./ActionButtons.module.scss";

interface ActionButtons {
  upvoteCount: number;
}

function ActionButtons({ upvoteCount }: ActionButtons) {
  return (
    <div className={styles.ActionButtons}>
      <Button type="button" icon={UpvoteIcon} className={styles.UpvoteButton}>
        {upvoteCount}
      </Button>
      <Button type="button" className={styles.BookmarkButton}>
        <BookmarkIcon className={styles.BookmarkIcon} />
      </Button>
    </div>
  );
}

export default ActionButtons;

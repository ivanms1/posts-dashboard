import Image from "next/image";
import { formatDistance } from "date-fns";

import { Post } from "..";

import styles from "./AuthorBox.module.scss";

interface AuhtorBox {
  user: Post["post"]["user"];
  createdAt: string;
  viewCount?: number;
}

function AuthorBox({ user, createdAt, viewCount }: AuhtorBox) {
  return (
    <div className={styles.AuthorBox}>
      <div className={styles.AvatarContainer}>
        <Image
          src={user?.image_url}
          className={styles.Avatar}
          width={50}
          height={50}
          alt={user?.nick_name}
        />
      </div>

      <div className={styles.Details}>
        <div className={styles.UserDetails}>
          <span className={styles.Nickname}>{user?.nick_name}</span>
          <span className={styles.SkinType}>{user?.skin_type}</span>
        </div>
        <div className={styles.PostDetails}>
          <span className={styles.CreatedAt}>
            {formatDistance(new Date(createdAt), new Date(), {
              addSuffix: true,
            })}
          </span>
          {viewCount && (
            <>
              <span className={styles.Dot} />
              <span className={styles.ViewCount}>
                {viewCount.toLocaleString()} Views
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthorBox;

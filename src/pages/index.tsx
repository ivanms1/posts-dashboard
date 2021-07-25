import Post from "../components/Post";

import { POST } from "../const";

import styles from "./index.module.scss";

export default function Home() {
  return (
    <div className={styles.Container}>
      <Post post={POST} />
    </div>
  );
}

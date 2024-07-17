import styles from "@/styles/MovingBackground.module.scss";

const MovingBackground = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.firstRotateAnimator}>
        <div className={`${styles.gradient} ${styles.flamingo}`}></div>
      </div>
      <div className={styles.secondRotateAnimation}>
        <div className={`${styles.gradient} ${styles.orange}`}></div>
      </div>
      <div className={styles.thirdRotateAnimation}>
        <div className={`${styles.gradient} ${styles.green}`}></div>
      </div>
      <div className={styles.fourthRotateAnimation}>
        <div className={`${styles.gradient} ${styles.blue}`}></div>
      </div>
    </div>
  );
};

export default MovingBackground;
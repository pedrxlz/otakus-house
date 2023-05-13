import styles from "./CardSkeleton.module.css";

export const CardSkeleton = () => {
  return (
    <div className="card">
      <div className="card-img-top img-fluid">
        <div className={styles.skeleton}></div>
      </div>
      <div className="card-body">
        <h5 className="card-title placeholder-glow">
          <span class="placeholder col-6"></span>
        </h5>
        <h6 className="card-subtitle mb-2 text-body-secondary placeholder-glow">
          <span className="placeholder col-7"></span>
          <span className="placeholder col-4"></span>
        </h6>
        <div className="card-icon placeholder-glow">
          <svg
            className="placeholder"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="14"
            height="14"
          >
            <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path>
          </svg>
          <span></span>
        </div>
        <p className="card-subtitle placeholder-glow">
          <span className="placeholder">R$ 800 noite</span>
        </p>
        <p className="card-text"></p>
      </div>
    </div>
  );
};

import Image from "next/image.js";

import styles from "./TravelLine.module.css";
import { useRouter } from "next/router.js";

export default function TravelLineSkeleton() {
  return (
    <div className={styles.listCard}>
      <div className={styles.skeleton}></div>
      <div>
        <div className="placeholder-glow">
          <h5 className="fw-bolder h5 placeholder">Kami house</h5>
        </div>

        <span className="fw-normal mb-1 placeholder">
          Anfitrião: Mestre Kami
        </span>
        <span className="fw-normal mb-1 placeholder">
          12/05/2090 - 12/05/2090
        </span>
      </div>
    </div>
  );
}

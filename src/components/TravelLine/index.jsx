import Image from "next/image.js";

import styles from "./TravelLine.module.css";
import { useRouter } from "next/router.js";

export default function TravelLine({ travel }) {
  const router = useRouter();
  return (
    <div
      className={styles.listCard}
      onClick={() => router.push(`travels/${travel?.id}`)}
    >
      <Image
        src={`/images/${travel?.image}`}
        className="img-thumbnail"
        width={200}
        height={200}
        alt="travel"
      />
      <div>
        <h5 className="fw-bolder h5">{travel?.name}</h5>
        <p className="fw-normal mb-1">Anfitrião: {travel?.owner}</p>
        <p className="fw-normal mb-1">{travel?.date}</p>
      </div>
    </div>
  );
}

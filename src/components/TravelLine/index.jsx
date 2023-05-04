import Image from "next/image.js";

import styles from "./TravelLine.module.css";

export default function TravelLine({ travel }) {
  return (
    <div className={styles.listCard} id="travel-01">
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

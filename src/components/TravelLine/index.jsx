import Image from "next/image.js";

import styles from "./TravelLine.module.css";
import { useRouter } from "next/router.js";

export default function TravelLine({ travel }) {
  const router = useRouter();
  return (
    <div
      className={styles.listCard}
      onClick={() => router.push(`travels/${travel?._id}`)}
    >
      <Image
        src={`/images/${travel?.room?.image?.[0]}`}
        className="img-thumbnail"
        width={200}
        height={200}
        alt="travel"
      />
      <div>
        <h5 className="fw-bolder h5">{travel?.room?.name}</h5>
        <p className="fw-normal mb-1">Anfitrião: {travel?.room?.owner}</p>
        <p className="fw-normal mb-1">
          {new Date(travel?.checkinDate).toLocaleDateString()} -{" "}
          {new Date(travel?.checkoutDate).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

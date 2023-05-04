import { activeTravels, expiredTravels } from "../../constants/index.js";
import TravelLine from "../../components/TravelLine/index.jsx";
import { useState } from "react";
import styles from "./Travels.module.css";

export default function Travels() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="container">
      <main>
        <div className="text-left">
          <h1 className="fw-bolder">Suas viagens</h1>
        </div>
        <br />
        <div className="row">
          <div className="col-md-12">
            <div className={styles.tabs}>
              <button
                className={`${styles.tab} ${tabIndex === 0 && styles.active}`}
                onClick={() => setTabIndex(0)}
              >
                Ativas
              </button>
              <button
                className={`${styles.tab} ${tabIndex === 1 && styles.active}`}
                onClick={() => setTabIndex(1)}
              >
                Encerradas
              </button>
            </div>
            <div className="d-flex gap-2 flex-column my-4">
              {tabIndex === 0 &&
                activeTravels?.map((travel) => (
                  <TravelLine key={travel?.id} travel={travel} />
                ))}
              {tabIndex === 1 &&
                expiredTravels?.map((travel) => (
                  <TravelLine key={travel?.id} travel={travel} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
import { activeTravels, expiredTravels } from "../../constants/index.js";
import TravelLine from "../../components/TravelLine/index.jsx";
import { useState } from "react";
import styles from "./Travels.module.css";
import { useUserTravels } from "@/hooks/swr/useUserTravels.js";
import TravelLineSkeleton from "@/components/TravelLine/TravelLineSkeleton.jsx";
import Head from "next/head.js";

export default function Travels() {
  const [tabIndex, setTabIndex] = useState(0);
  const { travels, isLoading } = useUserTravels({ expired: !!tabIndex });

  return (
    <div className="container">
      <Head>
        <title>OtakusHouse - Suas viagens</title>
        <link rel="icon" href="/images/OtakusHouse.png" />
      </Head>
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
              {!isLoading
                ? travels?.map((travel) => (
                    <TravelLine key={travel?.id} travel={travel} />
                  ))
                : Array.from(new Array(5)).map((_, index) => (
                    <TravelLineSkeleton key={index} />
                  ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

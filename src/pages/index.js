import { useRooms } from "@/hooks/swr/useRooms.js";
import { Card } from "../components/Card/index.jsx";
import { SearchBar } from "../components/SearchBar/index.jsx";
import { CardSkeleton } from "@/components/Card/CardSkeleton.jsx";
import Head from "next/head.js";

export default function Home() {
  const { rooms, isLoading } = useRooms();

  return (
    <>
      <Head>
        <title>OtakusHouse - Home</title>
        <link rel="icon" href="/images/OtakusHouse.png" />
      </Head>
      <main>
        <div className="container">
          <SearchBar />
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            {!isLoading ? (
              rooms?.map((item) => (
                <div key={item?.id} className="col">
                  <Card item={item} />
                </div>
              ))
            ) : (
              <>
                {Array.from(new Array(6)).map((_, index) => (
                  <div key={index} className="col">
                    <CardSkeleton key={index} />
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

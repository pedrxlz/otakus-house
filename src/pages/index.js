import { Card } from "../components/Card/index.jsx";
import { SearchBar } from "../components/SearchBar/index.jsx";
import { items } from "../constants/index.js";

export default function Home() {
  return (
    <>
      <main>
        <div className="container">
          <SearchBar />
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            {items?.map((item) => (
              <div key={item?.id} className="col">
                <Card item={item} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

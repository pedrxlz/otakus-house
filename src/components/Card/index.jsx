import { useRouter } from "next/router.js";
import Image from "next/image.js";

export const Card = ({ item }) => {
  const router = useRouter();

  return (
    <div className="card" onClick={() => router.push(`/room/${item?.id}`)}>
      <Image
        src={`/images/${item?.image}`}
        className="card-img-top img-fluid"
        alt="image"
        width={300}
        height={200}
      />
      <div className="card-body">
        <h5 className="card-title">{item?.name}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{item?.date}</h6>
        <div className="card-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="14"
            height="14"
          >
            <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path>
          </svg>
          <span>{item?.rating}</span>
        </div>
        <p className="card-subtitle">
          <b>R$ {item?.price}</b> noite
        </p>
        <p className="card-text">{item?.description}</p>
      </div>
    </div>
  );
};

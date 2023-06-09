import Image from "next/image.js";
import styles from "./Travel.module.css";
import { useRouter } from "next/router.js";
import { useTravel } from "@/hooks/swr/useTravel.js";
import { cancelBooking } from "@/services/booking/index.js";
import { toast } from "react-toastify";
import Head from "next/head.js";

export default function Travel() {
  const router = useRouter();
  const { id } = router.query;

  const { travel } = useTravel({ id });

  const handleCancel = () => {
    toast.promise(cancelBooking({ id }), {
      pending: {
        render() {
          return "Processando...";
        },
        icon: true,
      },
      success: {
        render() {
          router.push("/travels");
          return `Sua viagem foi cancelada`;
        },
        autoClose: 1000,
      },
      error: {
        render({ data }) {
          return data?.response?.data?.error;
        },
      },
    });
  };

  return (
    <div className="container">
      <Head>
        <title>OtakusHouse - {travel?.room?.name}</title>
        <link rel="icon" href="/images/OtakusHouse.png" />
      </Head>
      <div id="carrossel" className="carousel slide">
        <div className="carousel-inner">
          {travel?.room?.image?.map((image, index) => (
            <div className="carousel-item active carousel-img-item" key={index}>
              <Image
                className="w-100 carousel-img"
                src={`/images/${image}`}
                alt={"image"}
                width={200}
                height={100}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carrossel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carrossel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <br />

      <section className="description-container">
        <div className="row">
          <div className="description col-lg-8">
            <h1>{travel?.room?.name}</h1>
            <h5>
              {travel?.guests} hóspede{travel?.guests > 1 && "s"} - 2 quartos -
              7 camas - 2 banheiros
            </h5>
            <h6>Ceará, Brasil</h6>
            <hr />
            <p>{travel?.room?.description}</p>
          </div>

          <div className="col-lg-4">
            <div className={styles.customCard}>
              <div className={styles.infoDateContainer}>
                <div className={styles.infoDateField}>
                  <small className="fw-bolder">Checkin</small>
                  <p className="fs-6 mb-0">
                    {new Date(travel?.checkinDate)?.toLocaleString()}
                  </p>
                </div>
                <div
                  className={styles.infoDateField}
                  style={{ borderLeft: "1px solid rgb(199, 199, 199)" }}
                >
                  <small className="fw-bolder">Checkout</small>
                  <p className="fs-6 mb-0">
                    {new Date(travel?.checkoutDate)?.toLocaleString()}
                  </p>
                </div>
              </div>
              <br />
              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-outline-danger w-100"
                  onClick={handleCancel}
                >
                  Cancelar viagem
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

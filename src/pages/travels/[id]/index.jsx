import Image from "next/image.js";
import styles from "./Travel.module.css";

export default function Travel() {
  return (
    <div className="container">
      <div id="carrossel" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active carousel-img-item">
            <Image
              className="w-100 carousel-img"
              src="/images/Casa Paradis.webp"
              alt={"image"}
              width={200}
              height={100}
            />
          </div>
          <div className="carousel-item carousel-img-item">
            <Image
              className="w-100 carousel-img"
              src="/images/GraceField.jpg"
              alt={"image"}
              width={200}
              height={100}
            />
          </div>
          <div className="carousel-item carousel-img-item">
            <Image
              className="w-100 carousel-img"
              src="/images/HokageMansion.jpg"
              alt={"image"}
              width={200}
              height={100}
            />
          </div>
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
            <h1>Titulo</h1>
            <h5>7 hóspedes - 2 quartos - 7 camas - 2 banheiros</h5>
            <h6>Ceará, Brasil</h6>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id
              lectus vel nibh hendrerit condimentum non vitae risus. Fusce
              luctus neque id augue accumsan, a lacinia odio tempor. Integer
              mollis, ante eu venenatis tempus, erat sapien maximus ligula, in
              interdum magna felis eu sapien. Quisque placerat laoreet
              condimentum. Praesent vel cursus felis, eu aliquet lacus. Ut
              gravida arcu hendrerit imperdiet suscipit. Curabitur facilisis,
              orci et sollicitudin eleifend, orci nisl pulvinar sem, quis
              blandit justo est a lorem.
            </p>
          </div>

          <div className="col-lg-4">
            <div className={styles.customCard}>
              <div className={styles.infoDateContainer}>
                <div className={styles.infoDateField}>
                  <div>
                    <small className="fw-bolder">Checkin</small>
                    <h3 className="fs-6">sáb., 28 de dez.</h3>
                    <p className="fs-6">12:00</p>
                  </div>
                </div>
                <div
                  className={styles.infoDateField}
                  style={{ borderLeft: "1px solid rgb(199, 199, 199)" }}
                >
                  <div>
                    <small className="fw-bolder">Checkout</small>
                    <h6 className="fs-6">seg., 30 de dez.</h6>
                    <p className="fs-6">12:00</p>
                  </div>
                </div>
              </div>

              <br />

              <br />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

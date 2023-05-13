import { useRoom } from "@/hooks/swr/useRoom.js";
import Image from "next/image.js";
import { useRouter } from "next/router.js";

const Room = () => {
  const router = useRouter();
  const { id } = router.query;

  const { room } = useRoom({ id });
  console.log(room);
  return (
    <>
      <div className="container">
        <div id="carrossel" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active carousel-img-item">
              <Image
                className="w-100 carousel-img"
                src={`/images/${room?.image}`}
                width={300}
                height={200}
                alt="image"
              />
            </div>
            {/* <div className="carousel-item carousel-img-item">
              <Image
                className="w-100 carousel-img"
                src="/images/GraceField.jpg"
                width={300}
                height={200}
                alt="image"
              />
            </div>
            <div className="carousel-item carousel-img-item">
              <Image
                className="w-100 carousel-img"
                src="/images/HokageMansion.jpg"
                width={300}
                height={200}
                alt="image"
              />
            </div> */}
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
              <h1>{room?.name}</h1>
              <h5>7 hóspedes - 2 quartos - 7 camas - 2 banheiros</h5>
              <h6>Ceará, Brasil</h6>
              <hr />
              <p>{room?.description}</p>
            </div>

            <div className="col-lg-4">
              <div className="custom-card">
                <div className="card-header">
                  <p className="fs-3">
                    <b>R$500</b> noite
                  </p>
                </div>

                <div className="form-floating">
                  <input type="date" className="form-control" />
                  <label for="floatingPassword">Checkin</label>
                </div>

                <div className="form-floating">
                  <input type="date" className="form-control" />
                  <label for="floatingPassword">Checkout</label>
                </div>

                <br />

                <label
                  for="country"
                  className="form-label text-start fw-medium"
                >
                  Hóspedes
                </label>
                <select className="form-select" id="country">
                  <option selected>Escolha...</option>
                  <option value="1">1 Hóspede</option>
                  <option value="2">2 Hóspedes</option>
                  <option value="3">3 Hóspedes</option>
                  <option value="4">4 Hóspedes</option>
                </select>

                <br />

                <h6 className="fw-medium">R$500 x 5 dias = R$ 2.500,00</h6>

                <br />

                <div className="d-grid">
                  <button
                    id="btnReservar"
                    className="btn btn-primary btn-lg"
                    style={{ backgroundColor: "#00a39c" }}
                    type="button"
                    onClick={() => {
                      router.push(`/room/${id}/checkout`);
                    }}
                  >
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Room;

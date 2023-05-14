import { useRoom } from "@/hooks/swr/useRoom.js";
import { diffDays, urlParams } from "@/utils/index.js";
import Head from "next/head.js";
import Image from "next/image.js";
import { useRouter } from "next/router.js";
import { useMemo } from "react";
import { useState } from "react";

const Room = () => {
  const router = useRouter();
  const { id } = router.query;

  const [form, setForm] = useState({
    checkin: "",
    checkout: "",
    guests: "",
  });

  const { room } = useRoom({ id });

  const onChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setForm((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const IS_FORM_DISABLED = useMemo(() => {
    const states = [form.checkin, form.checkout, form.guests];
    return states.includes("");
  }, [form.checkin, form.checkout, form.guests]);

  const diffDaysValue = useMemo(() => {
    return diffDays(form.checkin, form.checkout);
  }, [form.checkin, form.checkout]);

  return (
    <>
      <Head>
        <title>Reservar - {room?.name} </title>
        <link rel="icon" href="/images/OtakusHouse.png" />
      </Head>
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
                    <b>R${room?.price}</b> noite
                  </p>
                </div>

                <div className="form-floating">
                  <input
                    type="date"
                    name="checkin"
                    className="form-control"
                    value={form.checkin}
                    onChange={onChange}
                  />
                  <label htmlFor="floatingPassword">Checkin</label>
                </div>

                <div className="form-floating">
                  <input
                    type="date"
                    name="checkout"
                    className="form-control"
                    value={form.checkout}
                    onChange={onChange}
                  />
                  <label htmlFor="floatingPassword">Checkout</label>
                </div>

                <br />

                <label
                  htmlFor="country"
                  className="form-label text-start fw-medium"
                >
                  Hóspedes
                </label>
                <select
                  className="form-select"
                  name="guests"
                  value={form.guests}
                  onChange={onChange}
                >
                  <option value="">Escolha...</option>
                  <option value="1">1 Hóspede</option>
                  <option value="2">2 Hóspedes</option>
                  <option value="3">3 Hóspedes</option>
                  <option value="4">4 Hóspedes</option>
                </select>

                <br />

                <h6 className="fw-medium">
                  R${room?.price} x {diffDaysValue} dias = R$
                  {diffDaysValue * room?.price}
                </h6>

                <br />

                <div className="d-grid">
                  <button
                    id="btnReservar"
                    className="btn btn-primary btn-lg"
                    style={{ backgroundColor: "#00a39c" }}
                    type="button"
                    disabled={IS_FORM_DISABLED}
                    onClick={() => {
                      const strParams = urlParams(form);
                      router.push(`/room/${id}/checkout${strParams}`);
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

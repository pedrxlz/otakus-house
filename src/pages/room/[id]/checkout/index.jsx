import Image from "next/image.js";
import styles from "./Checkout.module.css";
import { useRouter } from "next/router.js";
import { useState } from "react";
import { diffDays } from "@/utils/index.js";
import { useRoom } from "@/hooks/swr/useRoom.js";
import { useMemo } from "react";

export default function Checkout() {
  const router = useRouter();
  const { id, checkin, checkout, guests } = router.query;

  const { room } = useRoom({ id });

  const [travelForm, setTravelForm] = useState({ checkin, checkout, guests });
  const [onEdit, setOnEdit] = useState("");

  const diffDaysValue = useMemo(() => {
    return diffDays(travelForm.checkin, travelForm.checkout);
  }, [travelForm.checkin, travelForm.checkout]);

  const onChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setTravelForm((prev) => {
      return { ...prev, [key]: value };
    });
  };

  return (
    <div className="container">
      <main>
        <div className="text-left">
          <h1 className="fw-bolder">Reservar</h1>
        </div>
        <br />
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <ul className="list-group mb-3">
              <li className="list-group-item lh-sm">
                <div className={`row ${styles.roomInfoContainer}`}>
                  <Image
                    src={`/images/${room?.image}`}
                    className="img-thumbnail img-fluid col-4"
                    style={{ objectFit: "cover" }}
                    width={300}
                    height={200}
                    alt="..."
                  />

                  <div className="room-info col-8">
                    <div className="d-flex flex-column justify-content-between h-100">
                      <div className="d-flex flex-column">
                        <span className="text-body-secondary">
                          Espaço inteiro: Condomínio
                        </span>
                        <span className="fw-bolder fs-4">Kame House</span>
                      </div>
                      <div>
                        <div className="d-flex gap-1 align-items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            width="14"
                            height="14"
                          >
                            <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path>
                          </svg>
                          <span>4,4</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item lh-sm">
                <br />
                <h6 className="my-0">Informações de preço</h6>
                <br />
                <div className="d-flex justify-content-between w-100">
                  <small className="text-body-secondary">
                    R$ {room?.price} x {diffDaysValue} noites
                  </small>
                  <span className="text-body-secondary">
                    R$ {diffDaysValue * room?.price}
                  </span>
                </div>
                <div className="d-flex justify-content-between w-100">
                  <small className="text-body-secondary">Taxa de serviço</small>
                  <span className="text-body-secondary">R$ 100</span>
                </div>
                <br />
              </li>

              <li className="list-group-item d-flex justify-content-between">
                <h6>Total (BRL)</h6>
                <strong>R$ {diffDaysValue * room?.price + 100}</strong>
              </li>
            </ul>
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Sua viagem</h4>
            <br className="" />
            <div className="row justify-content-center">
              <div className="col-md-12 edit">
                <label className="form-label fw-semibold">Datas</label>
                {onEdit === "date" ? (
                  <div className="d-flex flex-column gap-2 py-3">
                    <div className="form-floating">
                      <input
                        type="date"
                        name="checkin"
                        className="form-control"
                        value={travelForm.checkin}
                        onChange={onChange}
                      />
                      <label htmlFor="floatingPassword">Checkin</label>
                    </div>

                    <div className="form-floating">
                      <input
                        type="date"
                        name="checkout"
                        className="form-control"
                        value={travelForm.checkout}
                        onChange={onChange}
                      />
                      <label htmlFor="floatingPassword">Checkout</label>
                    </div>
                    <span
                      className={`fw-semibold ${styles.editItem}`}
                      onClick={() => setOnEdit("")}
                    >
                      Cancelar
                    </span>
                    <button
                      name={"name"}
                      className={`btn btn-lg ${styles.btnSave}`}
                      onClick={() => setOnEdit("")}
                    >
                      Salvar
                    </button>
                  </div>
                ) : (
                  <>
                    <p className="form-label fw-normal">
                      {new Date(travelForm.checkin).toLocaleDateString()} -{" "}
                      {new Date(travelForm.checkout).toLocaleDateString()}
                    </p>
                    <span
                      className="fw-semibold edit-item"
                      onClick={() => setOnEdit("date")}
                    >
                      Editar
                    </span>
                  </>
                )}
              </div>
              <div className="col-md-12 edit">
                <label className="form-label fw-semibold">Hóspedes</label>
                {onEdit === "guests" ? (
                  <div className="d-flex flex-column gap-2 py-3">
                    <select
                      className="form-select"
                      name="guests"
                      value={travelForm.guests}
                      onChange={onChange}
                    >
                      <option value="">Escolha...</option>
                      <option value="1">1 Hóspede</option>
                      <option value="2">2 Hóspedes</option>
                      <option value="3">3 Hóspedes</option>
                      <option value="4">4 Hóspedes</option>
                    </select>
                    <span
                      className={`fw-semibold ${styles.editItem}`}
                      onClick={() => setOnEdit("")}
                    >
                      Cancelar
                    </span>
                    <button
                      name={"name"}
                      className={`btn btn-lg ${styles.btnSave}`}
                      onClick={() => setOnEdit("")}
                    >
                      Salvar
                    </button>
                  </div>
                ) : (
                  <>
                    {" "}
                    <p className="form-label fw-normal">
                      {travelForm.guests} Hóspede{travelForm.guests > 1 && "s"}
                    </p>
                    <span
                      className="fw-semibold edit-item"
                      onClick={() => setOnEdit("guests")}
                    >
                      Editar
                    </span>
                  </>
                )}
              </div>
            </div>
            <form className="needs-validation">
              <hr className="my-4" />

              <h4 className="mb-3">Pagamento</h4>

              <div className="my-3">
                <div className="form-check">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    checked
                    required
                  />
                  <label className="form-check-label" htmlFor="credit">
                    Cartão de Crédito
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required
                  />
                  <label className="form-check-label" htmlFor="debit">
                    Cartão de débito
                  </label>
                </div>
              </div>

              <div className="row gy-3">
                <div className="col-md-6">
                  <label htmlFor="cc-name" className="form-label">
                    Nome no cartão
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-name"
                    placeholder=""
                    required
                  />
                  <small className="text-body-secondary">
                    Nome completo mostrado no cartão
                  </small>
                  <div className="invalid-feedback">
                    Nome no cartão é obrigatório
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="cc-number" className="form-label">
                    Número do cartão
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-number"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">
                    Numero do cartão é obrigatório
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="cc-expiration" className="form-label">
                    Vencimento
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-expiration"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">
                    Data de expiração é obrigatório
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="cc-cvv" className="form-label">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-cvv"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">
                    Código de segurança é obrigatório
                  </div>
                </div>
              </div>

              <hr className="my-4" />

              <button
                className="w-100 btn btn-lg btn-primary"
                style={{ backgroundColor: "#00a39c" }}
                type="submit"
              >
                Reservar
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

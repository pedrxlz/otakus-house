import { useRouter } from "next/router.js";
import { useUser } from "../../hooks/swr/useUser.js";
import styles from "./Profile.module.css";
import { useEffect, useMemo, useState } from "react";
import { parseCookies } from "nookies";
import { toast } from "react-toastify";
import { editUser } from "../../services/user/index.js";
import { getNameString } from "../../utils/index.js";

export default function Profile() {
  const router = useRouter();
  const [onEdit, setOnEdit] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [address, setAddress] = useState("");

  const userCookies = useMemo(() => {
    const cookies = parseCookies();
    return cookies?.user ? JSON.parse(cookies?.user) : null;
  }, []);

  const { user, mutate, error } = useUser({
    email: userCookies?.email,
  });

  const getEditState = (str) => {
    switch (str) {
      case "name":
        return name;
      case "email":
        return email;
      case "tel":
        return tel;
      case "address":
        return address;
      default:
        break;
    }
  };

  const handleEdit = (e) => {
    const name = e.target.name;

    const _user = {
      [name]: getEditState(name),
    };

    toast.promise(editUser(_user, userCookies?.email), {
      pending: {
        render() {
          return "Processando...";
        },
        icon: false,
      },
      success: {
        render() {
          mutate();
          setOnEdit("");
          return `${getNameString(name)} alterado!`;
        },
        autoClose: 5000,
      },
      error: {
        render({ data }) {
          return data?.response?.data?.error;
        },
      },
    });
  };

  useEffect(() => {
    if (name === "" && !!user?.name) {
      setName(user?.name);
      setEmail(user?.email);
      setTel(user?.telefone);
      setAddress(user?.address);
    }
  }, [address, email, name, tel, user]);

  useEffect(() => {
    if (error === "User not found" || userCookies === null)
      router.push("/login");
  }, [error, router, userCookies]);

  return (
    <div className="container mt-5">
      <main>
        <div className="text-left">
          <h1 className="fw-bolder">Perfil</h1>
        </div>
        <br />
        <div className="row">
          <div className="col-md-12">
            <br className="" />
            <div className="row justify-content-center">
              <div className="col-md-12 edit" id="name">
                <label className="form-label fw-semibold">Nome</label>
                {onEdit === "name" ? (
                  <>
                    <div class="d-flex flex-column gap-2 py-3">
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          required
                          minLength={3}
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <span
                          className={`fw-semibold ${styles.editItem}`}
                          onClick={() => setOnEdit("")}
                        >
                          Cancelar
                        </span>
                      </div>
                      <button
                        name={"name"}
                        className={`btn btn-lg ${styles.btnSave}`}
                        onClick={handleEdit}
                      >
                        Salvar
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <p id="name" className="form-label fw-normal">
                      {user?.name}
                    </p>
                    <span
                      className={`fw-semibold ${styles.editItem}`}
                      onClick={() => setOnEdit("name")}
                    >
                      Editar
                    </span>
                  </>
                )}
              </div>
              <hr />
              <div className="col-md-12 edit" id="email">
                <label className="form-label fw-semibold">Email</label>
                {onEdit === "email" ? (
                  <>
                    <div class="d-flex flex-column gap-2 py-3">
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          required
                          minLength={3}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <span
                          className={`fw-semibold ${styles.editItem}`}
                          onClick={() => setOnEdit("")}
                        >
                          Cancelar
                        </span>
                      </div>
                      <button
                        name={"email"}
                        className={`btn btn-lg ${styles.btnSave}`}
                        onClick={handleEdit}
                      >
                        Salvar
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <p id="name" className="form-label fw-normal">
                      {user?.email}
                    </p>
                    <span
                      className={`fw-semibold ${styles.editItem}`}
                      onClick={() => setOnEdit("email")}
                    >
                      Editar
                    </span>
                  </>
                )}
              </div>
              <hr />
              <div className="col-md-12 edit" id="tel">
                <label className="form-label fw-semibold">
                  Número de telefone
                </label>
                {onEdit === "tel" ? (
                  <>
                    <div class="d-flex flex-column gap-2 py-3">
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          required
                          minLength={3}
                          value={tel}
                          onChange={(e) => setTel(e.target.value)}
                        />
                        <span
                          className={`fw-semibold ${styles.editItem}`}
                          onClick={() => setOnEdit("")}
                        >
                          Cancelar
                        </span>
                      </div>
                      <button
                        name={"tel"}
                        className={`btn btn-lg ${styles.btnSave}`}
                        onClick={handleEdit}
                      >
                        Salvar
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <p id="name" className="form-label fw-normal">
                      {user?.telefone}
                    </p>
                    <span
                      className={`fw-semibold ${styles.editItem}`}
                      onClick={() => setOnEdit("tel")}
                    >
                      Editar
                    </span>
                  </>
                )}
              </div>
              <hr />
              <div className="col-md-12 edit" id="address">
                <label className="form-label fw-semibold">Endereço</label>
                {onEdit === "address" ? (
                  <>
                    <div class="d-flex flex-column gap-2 py-3">
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          required
                          minLength={3}
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                        <span
                          className={`fw-semibold ${styles.editItem}`}
                          onClick={() => setOnEdit("")}
                        >
                          Cancelar
                        </span>
                      </div>
                      <button
                        name={"address"}
                        className={`btn btn-lg ${styles.btnSave}`}
                        onClick={handleEdit}
                      >
                        Salvar
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <p id="name" className="form-label fw-normal">
                      {user?.address}
                    </p>
                    <span
                      className={`fw-semibold ${styles.editItem}`}
                      onClick={() => setOnEdit("address")}
                    >
                      Editar
                    </span>
                  </>
                )}
              </div>
              <hr />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

import { useRouter } from "next/router.js";
import { useUser } from "../../hooks/swr/useUser.js";
import styles from "./Profile.module.css";
import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { editUser } from "../../services/user/index.js";
import { getNameString } from "../../utils/index.js";
import { logout } from "../../services/auth/index.js";

export default function Profile() {
  const router = useRouter();
  const [onEdit, setOnEdit] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [address, setAddress] = useState("");

  const userCookies = useMemo(() => {
    if (typeof window !== "undefined") {
      const _user = localStorage.getItem("user");
      return !!_user ? JSON.parse(_user) : null;
    }
  }, []);

  const { user, mutate, error } = useUser({
    email: userCookies?.email,
    authorization: userCookies?.authToken,
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
    setIsLoading(true);
    toast.promise(editUser(_user, userCookies?.email), {
      pending: {
        render() {
          return "Processando...";
        },
        icon: true,
      },
      success: {
        render() {
          mutate();
          setOnEdit("");
          setIsLoading(false);
          return `${getNameString(name)} alterado!`;
        },
        autoClose: 5000,
      },
      error: {
        render({ data }) {
          setIsLoading(false);
          return data?.response?.data?.error;
        },
      },
    });
  };

  const handleLogout = () => {
    toast.promise(logout({ authorization: userCookies?.authToken }), {
      pending: {
        render() {
          return "Processando...";
        },
        icon: true,
      },
      success: {
        render() {
          mutate();
          localStorage.removeItem("user");
          router.push("/");
          return `Usuário deslogado.`;
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
                    <div className="d-flex flex-column gap-2 py-3">
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
                        disabled={isLoading}
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
                    <div className="d-flex flex-column gap-2 py-3">
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
                        disabled={isLoading}
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
                    <div className="d-flex flex-column gap-2 py-3">
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
                        disabled={isLoading}
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
                    <div className="d-flex flex-column gap-2 py-3">
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
                        disabled={isLoading}
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
            <button
              type="button"
              className="btn btn-outline-danger mt-2"
              onClick={handleLogout}
            >
              Sair
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

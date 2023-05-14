import { useMemo, useState } from "react";
import { register } from "../../services/auth/index.js";
import { useRouter } from "next/router.js";
import { toast } from "react-toastify";
import Head from "next/head.js";

export default function Register() {
  const router = useRouter();

  const [user, setUser] = useState({
    name: "",
    email: "",
    tel: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const IS_PASSWORD_VALIDATED = useMemo(() => {
    return user.password === user.confirmPassword;
  }, [user.confirmPassword, user.password]);

  const handleRegister = (e) => {
    e.preventDefault();

    toast.promise(register(user), {
      pending: {
        render() {
          return "Processando...";
        },
        icon: true,
      },
      success: {
        render() {
          router.push("/login");
          return `Usuário criado!`;
        },
      },
      error: {
        render() {
          return "Usuário já existe!";
        },
      },
    });
  };

  return (
    <>
      <Head>
        <title>OtakusHouse - Registrar</title>
        <link rel="icon" href="/images/OtakusHouse.png" />
      </Head>
      <div className="container">
        <main>
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="py-5 text-left">
                <h1 className="fw-bold text-body-emphasis">Cadastro</h1>
              </div>
              <form onSubmit={handleRegister}>
                <div className="row g-3">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      required
                      minLength={3}
                      value={user.name}
                      onChange={(e) =>
                        setUser({ ...user, name: e.target.value })
                      }
                    />
                    <label
                      htmlFor="floatingInput"
                      className="text-body-secondary"
                    >
                      Nome
                    </label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      required
                      value={user.email}
                      onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                      }
                    />
                    <label
                      htmlFor="floatingInput"
                      className="text-body-secondary"
                    >
                      Email
                    </label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="tel"
                      className="form-control"
                      id="tel"
                      minLength={11}
                      required
                      value={user.tel}
                      onChange={(e) =>
                        setUser({ ...user, tel: e.target.value })
                      }
                    />
                    <label
                      htmlFor="floatingInput"
                      className="text-body-secondary"
                    >
                      Telefone
                    </label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      required
                      value={user.address}
                      onChange={(e) =>
                        setUser({ ...user, address: e.target.value })
                      }
                    />
                    <label
                      htmlFor="floatingInput"
                      className="text-body-secondary"
                    >
                      Endereço
                    </label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      required
                      value={user.password}
                      minLength={6}
                      onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                      }
                    />
                    <label
                      htmlFor="floatingInput"
                      className="text-body-secondary"
                    >
                      Senha
                    </label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      minLength={6}
                      required
                      value={user.confirmPassword}
                      onChange={(e) =>
                        setUser({ ...user, confirmPassword: e.target.value })
                      }
                    />
                    <label
                      htmlFor="floatingInput"
                      className="text-body-secondary"
                    >
                      Confirmar Senha
                    </label>
                    {!IS_PASSWORD_VALIDATED && (
                      <span
                        style={{
                          color: "red",
                          margin: "0",
                          paddingTop: "4px",
                          position: "absolute",
                        }}
                      >
                        As senhas devem ser iguais
                      </span>
                    )}
                  </div>

                  <button
                    className="btn btn-primary btn-lg fw-bold mt-5"
                    style={{ backgroundColor: "#00a39c", border: "none" }}
                    disabled={!IS_PASSWORD_VALIDATED}
                  >
                    Finalizar Cadastro
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

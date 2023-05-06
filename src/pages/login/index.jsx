import Image from "next/image.js";
import styles from "./Login.module.css";
import { login } from "../../services/auth/index.js";
import { useRouter } from "next/router.js";
import Link from "next/link.js";
import { toast } from "react-toastify";
import { useState } from "react";
import { setCookie } from "nookies";

const saveAuthTokenToCookie = (token) => {
  setCookie(null, "authToken", token, {
    maxAge: 30 * 24 * 60 * 60, // seconds
    path: "/",
  });
};

export default function Login() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    toast.promise(login(user), {
      pending: {
        render() {
          return "Processando...";
        },
        icon: false,
      },
      success: {
        render({ data }) {
          saveAuthTokenToCookie(data?.token);
          router.push("/");
        },
        autoClose: 1,
      },
      error: {
        render({ data }) {
          console.log(data);
          return data?.response?.data?.error;
        },
      },
    });
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.left}>
        <div className={styles.accountContainer}>
          <p>Não tem uma conta?</p>
          <button onClick={() => router.push("/register")}>Crie agora</button>
        </div>
      </div>
      <div className={styles.right}>
        <main className="form-signin w-100 m-auto">
          <div className={styles.formImgContainer}>
            <Image
              className={styles.formImg}
              src="/images/OtakusHouse.png"
              alt=""
              width="72"
              height="57"
            />
          </div>
          <br />
          <form onSubmit={handleLogin}>
            <h1 className="h3 mb-3 fw-normal">Entre com sua conta</h1>
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              <label for="floatingInput">Email</label>
            </div>
            <br />
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Senha"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <label for="floatingPassword">Senha</label>
            </div>
            <div className="text-end">
              <Link
                href="/findAccount"
                className="text-body-emphasis text-decoration-none"
              >
                Esqueceu a senha?
              </Link>
            </div>
            <br />
            <button className={`w-100 btn btn-lg ${styles.btnLogin}`}>
              Entrar
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}

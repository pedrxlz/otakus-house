import Image from "next/image.js";
import styles from "./Login.module.css";
import { login } from "../../services/auth/index.js";
import { useRouter } from "next/router.js";
import Link from "next/link.js";
import { toast } from "react-toastify";
import { useState } from "react";
import Head from "next/head.js";
import { useMediaQuery } from "@/hooks/useMediaQuery.jsx";

export default function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useMediaQuery("(min-width: 992px)");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    toast.promise(login(user), {
      pending: {
        render() {
          return "Processando...";
        },
        icon: true,
      },
      success: {
        render({ data }) {
          setIsLoading(false);
          const _user = {
            email: data?.email,
            _id: data?._id,
            authToken: data?.token,
          };
          localStorage.setItem("user", JSON.stringify(_user));
          router.push("/");
        },
        autoClose: 1,
      },
      error: {
        render({ data }) {
          setIsLoading(false);
          return data?.response?.data?.error;
        },
      },
    });
  };

  return (
    <>
      <Head>
        <title>OtakusHouse - Entrar</title>
        <link rel="icon" href="/images/OtakusHouse.png" />
      </Head>
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
                <label htmlFor="floatingInput">Email</label>
              </div>
              <br />
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Senha"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
                <label htmlFor="floatingPassword">Senha</label>
              </div>
              <div className="text-end">
                <Link
                  href="/find-account"
                  className="text-body-emphasis text-decoration-none"
                >
                  Esqueceu a senha?
                </Link>
              </div>
              <br />
              <button
                disabled={isLoading}
                className={`w-100 btn btn-lg ${styles.btnLogin}`}
              >
                {isLoading ? (
                  <div className="d-flex align-items-center justify-content-center w-100">
                    <div className="spinner-border" role="status"></div>
                  </div>
                ) : (
                  "Entrar"
                )}
              </button>
            </form>
            {!isMobile && (
              <div className="text-center mt-3">
                <p className="text-body-emphasis">
                  Não tem uma conta?{" "}
                  <Link
                    href="/register"
                    className="text-body-emphasis text-decoration-none"
                  >
                    Crie agora
                  </Link>
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
}

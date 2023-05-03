import Image from "next/image.js";
import styles from "./Login.module.css";

export default function Login() {
  return (
    <div className={styles.formContainer}>
      <div className={styles.left}>
        <div className={styles.accountContainer}>
          <p>Não tem uma conta?</p>
          <button id="createAccount">Crie agora</button>
        </div>
      </div>
      <div className={styles.right}>
        <main className="form-signin w-100 m-auto">
          <form id="loginForm">
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
            <h1 className="h3 mb-3 fw-normal">Entre com sua conta</h1>
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
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
              />
              <label for="floatingPassword">Senha</label>
            </div>
            <div className="text-end">
              <a
                href="/encontrar.html"
                className="text-body-emphasis text-decoration-none"
              >
                Esqueceu a senha?
              </a>
            </div>
            <br />
            <button
              id="btn-login"
              className={`w-100 btn btn-lg ${styles.btnLogin}`}
            >
              Entrar
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}

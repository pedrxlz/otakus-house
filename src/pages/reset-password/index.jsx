import Image from "next/image.js";
import styles from "../findAccount/FindAccount.module.css";
import { useRouter } from "next/router.js";

export default function ChangePassword() {
  const router = useRouter();
  return (
    <div className={styles.formContainer}>
      <div className={styles.left}></div>
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
          <h1 className="h3 mb-3 fw-bolder">Redefinir senha</h1>
          <h5 className="h5 mb-3 fw-normal">
            Digite sua nova senha diferente da anterior
          </h5>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="password"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Senha</label>
          </div>

          <br />
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="confirmPassword"
              placeholder="Senha"
            />
            <label for="floatingPassword">Confirmar senha</label>
          </div>
          <br />
          <button
            className={`w-100 btn btn-lg ${styles.btnLogin}`}
            onClick={() => router.push("/")}
          >
            Redefinir
          </button>
        </main>
      </div>
    </div>
  );
}

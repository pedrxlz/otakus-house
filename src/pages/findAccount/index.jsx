import Image from "next/image.js";
import { useRouter } from "next/router.js";
import styles from "./FindAccount.module.css";

export default function FindAccount() {
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
          <h1 className="h3 mb-3 fw-bolder">Encontre sua conta</h1>
          <h5 className="h5 mb-3 fw-normal">
            Insira seu email ou número de celular para encontrar sua conta.
          </h5>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="findByEmailOrPhone"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email ou número</label>
          </div>

          <br />
          <button
            className={`w-100 btn btn-lg ${styles.btnLogin}`}
            onClick={() => router.push("/changePassword")}
          >
            Recuperar conta
          </button>
        </main>
      </div>
    </div>
  );
}

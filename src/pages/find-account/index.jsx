import Image from "next/image.js";
import styles from "./FindAccount.module.css";
import { toast } from "react-toastify";
import { useState } from "react";
import { findAccount } from "../../services/auth/index.js";

export default function FindAccount() {
  const [value, setValue] = useState("");

  const handleFindAccount = () => {
    toast.promise(findAccount(value), {
      pending: {
        render() {
          return "Processando...";
        },
        icon: false,
      },
      success: {
        render() {
          return "Um email foi enviado para você com as instruções para recuperar sua conta.";
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
              placeholder="name@example.com"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <label for="floatingInput">Email ou número</label>
          </div>

          <br />
          <button
            className={`w-100 btn btn-lg ${styles.btnLogin}`}
            onClick={handleFindAccount}
          >
            Recuperar conta
          </button>
        </main>
      </div>
    </div>
  );
}

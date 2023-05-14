import Image from "next/image.js";
import styles from "../find-account/FindAccount.module.css";
import { useRouter } from "next/router.js";
import { useMemo, useState } from "react";
import { resetPassword } from "../../services/auth/index.js";
import { toast } from "react-toastify";

export default function ChangePassword() {
  const router = useRouter();

  const { token } = router.query;

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const IS_PASSWORD_VALIDATED = useMemo(() => {
    return password === confirmPassword;
  }, [confirmPassword, password]);

  const handleResetPassword = (e) => {
    e.preventDefault();
    toast.promise(resetPassword(confirmPassword, token), {
      pending: {
        render() {
          return "Processando...";
        },
        icon: true,
      },
      success: {
        render() {
          router.push("/login");
          return "Senha alterada com sucesso!";
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
          <h1 className="h3 mb-3 fw-bolder">Redefinir senha</h1>
          <h5 className="h5 mb-3 fw-normal">
            Digite sua nova senha diferente da anterior
          </h5>
          <form onSubmit={handleResetPassword}>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="floatingInput">Senha</label>
            </div>

            <br />
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                minLength={6}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <label htmlFor="floatingPassword">Confirmar senha</label>
            </div>
            {!IS_PASSWORD_VALIDATED && (
              <p
                className="text-danger"
                style={{
                  color: "red",
                  margin: "0",
                  paddingTop: "4px",
                  position: "absolute",
                }}
              >
                As senhas devem ser iguais
              </p>
            )}
            <br />
            <button
              className={`w-100 mt-4 btn btn-lg ${styles.btnLogin}`}
              disabled={!IS_PASSWORD_VALIDATED}
            >
              Redefinir
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}

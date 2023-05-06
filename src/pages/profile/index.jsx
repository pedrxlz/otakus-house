import { useRouter } from "next/router.js";
import { useUser } from "../../hooks/swr/useUser.js";
import styles from "./Profile.module.css";

export default function Profile() {
  const router = useRouter();

  const { user, error } = useUser({
    email: "camboim557@gmail.com",
  });

  if (error === "User not found") router.push("/login");
  return (
    <div className="container">
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
                <p id="name" className="form-label fw-normal">
                  {user?.name}
                </p>
                <span className={`fw-semibold ${styles.editItem}`}>Editar</span>
              </div>
              <hr />
              <div className="col-md-12 edit" id="email">
                <label className="form-label fw-semibold">Email</label>
                <p id="name" className="form-label fw-normal">
                  {user?.email}
                </p>
                <span className={`fw-semibold ${styles.editItem}`}>Editar</span>
              </div>
              <hr />
              <div className="col-md-12 edit" id="tel">
                <label className="form-label fw-semibold">
                  Número de telefone
                </label>
                <p id="name" className="form-label fw-normal">
                  {user?.telefone}
                </p>
                <span className={`fw-semibold ${styles.editItem}`}>Editar</span>
              </div>
              <hr />
              <div className="col-md-12 edit" id="address">
                <label className="form-label fw-semibold">Endereço</label>
                <p id="name" className="form-label fw-normal">
                  {user?.address}
                </p>
                <span className={`fw-semibold ${styles.editItem}`}>Editar</span>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

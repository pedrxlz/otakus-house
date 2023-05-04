import styles from "./Profile.module.css";

export default function Profile() {
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
                <p id="name" class="form-label fw-normal">
                  Lucas
                </p>
                <span className={`fw-semibold ${styles.editItem}`}>Editar</span>
              </div>
              <hr />
              <div className="col-md-12 edit" id="email">
                <label className="form-label fw-semibold">Email</label>
                <p id="name" class="form-label fw-normal">
                  lucas@gmail.com
                </p>
                <span className={`fw-semibold ${styles.editItem}`}>Editar</span>
              </div>
              <hr />
              <div className="col-md-12 edit" id="tel">
                <label className="form-label fw-semibold">
                  Número de telefone
                </label>
                <p id="name" class="form-label fw-normal">
                  +5585987390998
                </p>
                <span className={`fw-semibold ${styles.editItem}`}>Editar</span>
              </div>
              <hr />
              <div className="col-md-12 edit" id="address">
                <label className="form-label fw-semibold">Endereço</label>
                <p id="name" class="form-label fw-normal">
                  Rua José de Alencar, 123, Centro, Fortaleza-CE
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

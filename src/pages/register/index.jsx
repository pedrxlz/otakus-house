export default function Register() {
  return (
    <div className="container">
      <div
        className="toast align-items-center text-bg-primary border-0 position-fixed bottom-0 end-0 m-3"
        id="liveToast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="d-flex">
          <div className="toast-body">Usuário criado!</div>
          <button
            className="btn-close btn-close-white me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
      </div>
      <main>
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="py-5 text-left">
              <h1 className="fw-bold text-body-emphasis">Cadastro</h1>
            </div>
            <form className="needs-validation" id="registerForm">
              <div className="row g-3">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                  />
                  <label for="floatingInput" className="text-body-secondary">
                    Nome
                  </label>
                </div>
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                  />
                  <label for="floatingInput" className="text-body-secondary">
                    Email
                  </label>
                </div>
                <div className="form-floating">
                  <input
                    type="tel"
                    className="form-control"
                    id="tel"
                    required
                  />
                  <label for="floatingInput" className="text-body-secondary">
                    Telefone
                  </label>
                </div>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    required
                  />
                  <label for="floatingInput" className="text-body-secondary">
                    Endereço
                  </label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    required
                  />
                  <label for="floatingInput" className="text-body-secondary">
                    Senha
                  </label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    required
                  />
                  <label for="floatingInput" className="text-body-secondary">
                    Confirmar Senha
                  </label>
                </div>

                <button
                  className="btn btn-primary btn-lg fw-bold mt-5"
                  style={{ backgroundColor: "#00a39c", border: "none" }}
                >
                  Finalizar Cadastro
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

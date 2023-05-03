export const SearchBar = ({}) => {
  return (
    <div className="input-group input-group-lg">
      <input
        type="text"
        className="form-control"
        placeholder="Procurando por algum lugar?"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
      />
      <button className="btn" type="button" id="button-addon2">
        Pesquisar
      </button>
    </div>
  );
};

export const getNameString = (str) => {
  switch (str) {
    case "name":
      return "Nome";
    case "email":
      return "Email";
    case "password":
      return "Senha";
    case "tel":
      return "Telefone";
    case "address":
      return "Endereço";
    default:
      return str;
  }
};

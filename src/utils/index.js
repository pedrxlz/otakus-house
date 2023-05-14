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

export const urlParams = (obj) => {
  let params = [];
  for (let i in obj) {
    params.push(`${i}=${obj[i]}`);
  }
  return `?${params.join("&")}`;
};

export const diffDays = (date1, date2) => {
  if (date1 === "" || date2 === "") return 0;

  const oneDay = 24 * 60 * 60 * 1000;

  const d1 = new Date(date1);
  const d2 = new Date(date2);

  const diffInDays = Math.round(Math.abs((d2 - d1) / oneDay));

  return diffInDays;
};

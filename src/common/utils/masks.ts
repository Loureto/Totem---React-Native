const cpfMask = (value: string) => {
  const formattedText = value.replace(/[^0-9.\-]/g, "");
  return formattedText
    .replace(/^(\d{3})(\d)/, "$1.$2")
    .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1-$2");
};

const cnpjMask = (value: string) => {
  const formattedText = value.replace(/[^0-9.\-]/g, "");
  return formattedText
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");
};

const dateMask = (value: string) => {
  const formattedText = value.replace(/[^0-9\/]/g, "");
  return formattedText
    .replace(/^(\d{2})(\d)/, "$1/$2")
    .replace(/^(\d{2})\/(\d{2})(\d)/, "$1/$2/$3");
};

const formattedCpfOrCnpj = (value: string) => {
  if (value.length <= 14) {
    const reset = value.replace(/[^0-9]/g, "");
    return cpfMask(reset);
  }

  const reset = value.replace(/[^0-9]/g, "");
  return cnpjMask(reset);
};

export { formattedCpfOrCnpj, cpfMask, cnpjMask, dateMask };

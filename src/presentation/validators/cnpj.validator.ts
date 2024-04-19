export const validatorCNPJ = (cnpj: string) => {
  // Remover caracteres não numéricos do CNPJ
  cnpj = cnpj.replace(/\D/g, "");

  // Verificar se o CNPJ tem 14 dígitos
  if (cnpj.length !== 14) return false;

  // Verificar se todos os dígitos são iguais (isso tornaria o CNPJ inválido)
  if (/^(\d)\1{13}$/.test(cnpj)) return false;

  // Calcular o primeiro dígito verificador
  let soma = 0;
  let peso = 2;
  for (let i = 11; i >= 0; i--) {
    soma += parseInt(cnpj.charAt(i)) * peso;
    peso = peso === 9 ? 2 : peso + 1;
  }
  let digitoVerif1 = soma % 11 < 2 ? 0 : 11 - (soma % 11);

  // Verificar o primeiro dígito verificador
  if (parseInt(cnpj.charAt(12)) !== digitoVerif1) return false;

  // Calcular o segundo dígito verificador
  soma = 0;
  peso = 2;
  for (let i = 12; i >= 0; i--) {
    soma += parseInt(cnpj.charAt(i)) * peso;
    peso = peso === 9 ? 2 : peso + 1;
  }
  let digitoVerif2 = soma % 11 < 2 ? 0 : 11 - (soma % 11);

  // Verificar o segundo dígito verificador
  if (parseInt(cnpj.charAt(13)) !== digitoVerif2) return false;

  // Se passou por todas as verificações, o CNPJ é válido
  return true;
};

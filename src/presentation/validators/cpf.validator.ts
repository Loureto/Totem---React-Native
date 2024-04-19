export function validatorCPF(cpf: string) {
  // Remover caracteres não numéricos do CPF
  cpf = cpf.replace(/\D/g, "");

  // Verificar se o CPF tem 11 dígitos
  if (cpf.length !== 11) return false;

  // Verificar se todos os dígitos são iguais (isso tornaria o CPF inválido)
  if (/^(\d)\1{10}$/.test(cpf)) return false;

  // Calcular o primeiro dígito verificador
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let digitoVerif1 = soma % 11 < 2 ? 0 : 11 - (soma % 11);

  // Verificar o primeiro dígito verificador
  if (parseInt(cpf.charAt(9)) !== digitoVerif1) return false;

  // Calcular o segundo dígito verificador
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  let digitoVerif2 = soma % 11 < 2 ? 0 : 11 - (soma % 11);

  // Verificar o segundo dígito verificador
  if (parseInt(cpf.charAt(10)) !== digitoVerif2) return false;

  // Se passou por todas as verificações, o CPF é válido
  return true;
}

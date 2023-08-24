function encode(deslocamento, texto) {
  if (typeof deslocamento !== 'number') {
    throw new TypeError('O deslocamento deve ser um número.');
  }

  if (typeof texto !== 'string') {
    throw new TypeError('O texto deve ser uma string.');
  }
  deslocamento = deslocamento % 26;
  let resultado = '';

  for (let i = 0; i < texto.length; i++) {
    const ascii = texto.charCodeAt(i);

    if (ascii >= 65 && ascii <= 90) {
      // Letra maiúscula
      resultado += String.fromCharCode((ascii - 65 + deslocamento) % 26 + 65);
    } else if (ascii >= 97 && ascii <= 122) {
      // Letra minúscula
      resultado += String.fromCharCode((ascii - 97 + deslocamento) % 26 + 97);
    } else {
      // Caractere não-alfabético
      resultado += texto.charAt(i);
    }
  }
  return resultado
}

function decode(deslocamento, texto) {
  // Para descriptografar, desloque o número de casas para trás
  return encode((26 - deslocamento % 26) % 26, texto);
}
export default {
  encode, decode
}

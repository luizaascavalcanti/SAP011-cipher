import cipher from "./cipher.js"

document.getElementById('encode').addEventListener('click', () => {
  const texto = document.getElementById("input").value;
  const resultado = cipher.encode(3, texto)
  document.getElementById("result").value = resultado;
})
document.getElementById('decode').addEventListener('click', () => {
  const texto = document.getElementById("input").value;
  const resultado = cipher.decode(3, texto)
  document.getElementById("result").value = resultado;
})

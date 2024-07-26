// Para não alterar nenhum valor de forma errada, já deixar os ingressos diponíveis guardado
// let superior = parseInt(document.getElementById('qnt-superior').textContent);
// let inferior = parseInt(document.getElementById('qnt-inferior').textContent);

function comprar() {
  let quantidade = document.getElementById("qtd").value;
  let tipoIngresso = document.getElementById("tipo-ingresso").value;

  // Identificando o tipo de ingresso e levando para a função correspondente
  if (tipoIngresso == "pista") {
    comprarPista(quantidade);
  } else if (tipoIngresso == "superior") {
    comprarSuperior(quantidade);
  } else {
    comprarInferior(quantidade);
  }
}

// Comprar ingresso pista
function comprarPista(qtn) {
  let pista = parseInt(document.getElementById("qtd-pista").textContent);

  if (qtn > pista) {
    alert("Quantidade de ingresso informado maior que o disponível!");
  } else {
    pista -= qtn;
    document.getElementById("qtd-pista").textContent = pista;
    alert("Compra realizada com sucesso!");
  }
}

// Comprar ingresso superior
function comprarSuperior(qtn) {
  let superior = parseInt(document.getElementById("qtd-superior").textContent);

  if (qtn > superior) {
    alert("Quantidade de ingresso informado maior que o disponível!");
  } else {
    superior -= qtn;
    document.getElementById("qtd-superior").textContent = superior;
    alert("Compra realizada com sucesso!");
  }
}

// Comprar ingresso inferior
function comprarInferior(qtn) {
  let inferior = parseInt(document.getElementById("qtd-inferior").textContent);

  if (qtn > inferior) {
    alert("Quantidade de ingresso informado maior que o disponível!");
  } else {
    inferior -= qtn;
    document.getElementById("qtd-inferior").textContent = inferior;
    alert("Compra realizada com sucesso!");
  }
}

const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};
  
function buscaCortePorId(id) {
    for(let i = 0; i < barbearia.cortes.length; i++) {
      const pedido = barbearia.cortes[i]

      if (pedido.id=== id){
        return pedido
      } 
   }
     return 'Corte não encontrado'
}
buscaCortePorId('Pompadour')

function buscaBarbaPorId(id) {
  for(let i = 0; i < barbearia.barbas.length; i++) {
    const achar = barbearia.barbas[i]

    if (achar.id === id) {
      return achar 
    }
  }
  return 'Barba não encontrada'
}
buscaBarbaPorId('Barba Zero')

function verificaStatusBarbearia() {
  if (barbearia.estaAberto === true) {
    return 'Estamos abertos'
  } else {
    return 'Estamos fechados'
  }
}
verificaStatusBarbearia()

function retornaTodosCortes() {
    return barbearia.cortes
}
retornaTodosCortes()

function retornaTodasBarbas() {
  return barbearia.barbas
}
retornaTodasBarbas()

function criaPedido(nomeCliente, corteId, barbaId) {
  const corte = buscaCortePorId(corteId);
  const barba = buscaBarbaPorId(barbaId);

  const pedido = {
    nome: nomeCliente,
    pedidoCorte: corte.tipo,
    pedidoCortePreco: corte.valor,
    pedidoBarba: barba.tipo,
    pedidoBarbaPreco: barba.valor,
  }
  return pedido
}
criaPedido('João', 1, 2)

function atualizarServico(lista, id, valor, tipo) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].id === id) {
      lista[i].tipo = tipo;
      lista[i].valor = valor;
    }
  }
  return lista
}
atualizarServico(barbearia.barbas, 2, 35,'barba grande')

function calculaTotal(pedido) {
  let total = 0;

  if (pedido.pedidoCortePreco) {
    total += pedido.pedidoCortePreco;
  }
  if (pedido.pedidoBarbaPreco){
    total += pedido.pedidoBarbaPreco;
  }
  return total
}
calculaTotal(pedido)
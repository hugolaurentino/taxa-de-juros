const capital = 30000.00
const montante = 60000.00
const mes = 24
const juros = (Math.pow((montante / capital), (1 / mes)) - 1).toFixed(5)

console.log(`
O seu financiamento de ${capital.toFixed(2)} reais teve uma taxa de juros de ${(juros * 100).toFixed(3)}%, 
pois após ${mes} meses você teve que pagar ${montante.toFixed(2)} reais.
`);
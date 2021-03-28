/*No planeta Alpha vive a criatura Blobs, que come precisamente 1/2 
de seu suprimento de comida disponível todos os dias. 
Escreva um algoritmo que leia a capacidade inicial 
de suprimento de comida (em Kg), 
e calcule quantos dias passarão antes que Blobs coma todo esse suprimento 
até restar um quilo ou menos.
*/
let n = parseInt(gets());

function calcula(c) {
  if (c <= 1.0) {
    return 0;
  }
  const consumido = c/ 2.0;
  
  return 1 + calcula(consumido);
}

while (n--> 0) {
  const c = parseFloat(gets());
  const dias = calcula(c);
  
  console.log(dias, 'dias');
}
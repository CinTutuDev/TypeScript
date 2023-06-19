import { Producto, taxCalculation } from "./06-function-destructuring";

const carroCompra: Producto[] = [
  { descripcion: "Nokia",
    precio: 100 
  },
  {
    descripcion: "iPad",
    precio: 150,
  },
];


const [ total, tax ] = taxCalculation({

 productos: carroCompra,
 tax: 0.15

})

console.log('Total', total);
console.log('Tax', tax);

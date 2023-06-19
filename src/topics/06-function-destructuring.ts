export interface Producto {
  descripcion: string;
  precio: number;
}

const phone: Producto = {
  descripcion: "Nokia",
  precio: 125.0,
};

const tablet: Producto = {
  descripcion: "iPad Air",
  precio: 250.0,
};

interface TaxCalculadorOpcion {
  tax: number;
  productos: Producto[];
}

export function taxCalculation(options: TaxCalculadorOpcion): [number, number] {
  const { tax, productos } = options;
  let total = 0;
  productos.forEach(({ precio }) => {
    total += precio;
  });

  return [total, total * tax];
}
const carroCompra = [phone, tablet];
const tax = 0.15;

const [total, taxResult] = taxCalculation({
  productos: carroCompra,
  tax: tax,
});
console.log("Total", total);
console.log("tax", taxResult);
export {};

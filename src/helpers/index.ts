export function formatCurrency(amount: number){
    return new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(amount)
} // Esta funcion sirve para darle el formato de moneda a un numero,
// Ejm: number sin formato: 300, con formatCurrency: $300.00
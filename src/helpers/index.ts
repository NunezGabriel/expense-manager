export function formatCurrency(amount: number){
    return new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(amount)
} // Esta funcion sirve para darle el formato de moneda a un numero,
// Ejm: number sin formato: 300, con formatCurrency: $300.00

export function formatDate(dateStr: string) : string{ // Esta funcion formatea la fecha de un formato x a formato fecha en espanol
    const dateObj = new Date(dateStr)
    const options : Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return new Intl.DateTimeFormat('es-ES', options).format(dateObj)
}
export default function formatMoney(value) {
    if(value.includes('.') || value.includes(',')) {
        return value;
    }
    return `R$ ${value},00`;
}
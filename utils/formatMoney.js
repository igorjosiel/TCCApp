export default function formatMoney(value) {
    if(value.includes('.') || value.includes(',')) {
        return 'R$ ' + value;
    }
    return `R$ ${value},00`;
}
export default function useFormatPrice(r: any) {
    const result = parseFloat(r).toFixed(2);
    return `${result}`;
}
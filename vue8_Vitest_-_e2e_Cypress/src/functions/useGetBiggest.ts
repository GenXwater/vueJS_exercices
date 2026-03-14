export default function useGetBiggest(i: any) {
    const itemCopy = { ...i };
    let val = 0;
    let name = "";

    for (const property in itemCopy) {
        if (itemCopy[property] > val) {
            val = itemCopy[property];
            name = property;
        }
    }
    return `${val}`;
}

// Merge Function

export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    const merged: number[] = [];
    let i = 0, j = collection_2.length - 1, k = 0;

    // This while loop will do the combines three sorted arrays. It compares the values ​​from each array and adds the smallest value to the array.
    while (i < collection_1.length && j >= 0 && k < collection_3.length) {
        if (collection_1[i] <= collection_2[j] && collection_1[i] <= collection_3[k]) {
            merged.push(collection_1[i++]);
        } else if (collection_2[j] <= collection_1[i] && collection_2[j] <= collection_3[k]) {
            merged.push(collection_2[j--]);
        } else {
            merged.push(collection_3[k++]);
        }
    }

    // This loop selects the smallest value from collection_1 and collection_2 and adds that value to merged.
    while (i < collection_1.length && j >= 0) {
        merged.push(collection_1[i] <= collection_2[j] ? collection_1[i++] : collection_2[j--]);
    }

    // This loop selects the smallest value from collection_2 and collection_3 and adds that value to merged.
    while (j >= 0 && k < collection_3.length) {
        merged.push(collection_2[j] <= collection_3[k] ? collection_2[j--] : collection_3[k++]);
    }

    // This loop selects the smallest value from collection_1 and collection_3 and adds that value to merged.
    while (i < collection_1.length && k < collection_3.length) {
        merged.push(collection_1[i] <= collection_3[k] ? collection_1[i++] : collection_3[k++]);
    }

    // This loop takes all the remaining values ​​in collection_1 that haven't been added to merged yet.
    while (i < collection_1.length) {
        merged.push(collection_1[i++]);
    }

    // This loop takes all the remaining values ​​in collection_2 that haven't been added to merged yet.
    while (j >= 0) {
        merged.push(collection_2[j--]);
    }

    // This loop takes all the remaining values ​​in collection_3 that haven't been added to merged yet.
    while (k < collection_3.length) {
        merged.push(collection_3[k++]);
    }

    // return merged
    return merged;
}

export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    const merged: number[] = [];
    let i = 0, j = collection_2.length - 1, k = 0;

    while (i < collection_1.length && j >= 0 && k < collection_3.length) {
        if (collection_1[i] <= collection_2[j] && collection_1[i] <= collection_3[k]) {
            merged.push(collection_1[i++]);
        } else if (collection_2[j] <= collection_1[i] && collection_2[j] <= collection_3[k]) {
            merged.push(collection_2[j--]);
        } else {
            merged.push(collection_3[k++]);
        }
    }

    while (i < collection_1.length && j >= 0) {
        merged.push(collection_1[i] <= collection_2[j] ? collection_1[i++] : collection_2[j--]);
    }

    while (j >= 0 && k < collection_3.length) {
        merged.push(collection_2[j] <= collection_3[k] ? collection_2[j--] : collection_3[k++]);
    }

    while (i < collection_1.length && k < collection_3.length) {
        merged.push(collection_1[i] <= collection_3[k] ? collection_1[i++] : collection_3[k++]);
    }

    while (i < collection_1.length) {
        merged.push(collection_1[i++]);
    }

    while (j >= 0) {
        merged.push(collection_2[j--]);
    }

    while (k < collection_3.length) {
        merged.push(collection_3[k++]);
    }

    return merged;
}

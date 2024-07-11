import { merge } from './merge';

test('merge sorted arrays', () => {
    const collection_1 = [1, 3, 5];
    const collection_2 = [8, 6, 4];
    const collection_3 = [2, 7, 9];

    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('merge with empty collections', () => {
    const collection_1: number[] = [];
    const collection_2 = [3, 2, 1];
    const collection_3: number[] = [];

    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 2, 3]);
});

test('merge with one collection having one element', () => {
    const collection_1 = [1];
    const collection_2 = [4, 3, 2];
    const collection_3 = [5, 6, 7];

    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
});

export const getSubmatrix = (matrix, p1, p2) => matrix
    .filter((row, i) => i >= p1[1] && i < p2[1])
    .map(row =>
        row.filter((n, i) => i >= p1[0] && i < p2[0])
    );

export const getQuadrant = (matrix, x, y) => {
    const p1 = [x * 3, y * 3];
    const p2 = p1.map(n => n + 3);
    return getSubmatrix(matrix, p1, p2); 
};

export const range = (start, end) => new Array(end - start)
    .fill(null)
    .map((_, i) => i + start);

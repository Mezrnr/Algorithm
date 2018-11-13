let A = [3, 4, 9, 5, 6, 1, 2];

for (let j = 1; j < A.length; j++) {
    let key = A[j];

    let i = j - 1;
    while (i >= 0 && A[i] > key) {
        A[i + 1] = A[i];
        i--
    }
    A[i + 1] = key;
}

console.log(A);

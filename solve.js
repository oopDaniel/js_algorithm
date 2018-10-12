export default (arr) => {
  const n = arr.length
  const aux = new Array(n)
  sort(arr, aux, 0, n - 1)
}

function sort (arr, aux, lo, hi) {
  if (lo >= hi) return

  const mid = ~~((hi - lo) / 2) + lo
  sort(arr, aux, lo, mid)
  sort(arr, aux, mid + 1, hi)
  merge(arr, aux, lo, mid, hi)
}

function merge (arr, aux, lo, mid, hi) {
  for (let i = lo; i <= hi; i++) {
    aux[i] = arr[i]
  }

  let i1 = lo
  let i2 = mid + 1

  let i = lo
  while (i <= hi) {
    if (i1 > mid) {
      arr[i++] = aux[i2++]
    } else if (i2 > hi) {
      arr[i++] = aux[i1++]
    } else if (aux[i1] < aux[i2]) {
      arr[i++] = aux[i1++]
    } else {
      arr[i++] = aux[i2++]
    }
  }
}

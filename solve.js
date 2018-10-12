export default (arr) => {
  shuffle(arr)
  sort(arr, 0, arr.length - 1)
}

function shuffle (arr) {
  const len = arr.length
  const ran = n => ~~(Math.random() * n)
  for (let i = 0; i < len; i++) {
    const index = ran(i)
    swap(arr, i, index)
  }
}

function swap (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

function partition (arr, lo, hi) {
  const base = arr[lo]
  let i = lo
  let j = hi + 1

  while (1) {
    while (arr[++i] < base) {
      if (i === hi) break
    }
    while (base < arr[--j]) {
      if (j === lo) break
    }

    if (i >= j) break
    swap(arr, i, j)
  }

  swap(arr, lo, j)
  return j
}

function sort (arr, lo, hi) {
  if (lo >= hi) return
  const mid = partition(arr, lo, hi)
  sort(arr, lo, mid - 1)
  sort(arr, mid + 1, hi)
}

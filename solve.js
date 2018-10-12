export default (arr) => {
  const heap = [null] // We don't use 0

  for (let i = 0; i < arr.length; i++) {
    heap[i + 1] = arr[i]
    swim(heap, i + 1)
  }

  for (let i = heap.length - 1; i > 1; i--) {
    swap(heap, 1, i)
    sink(heap, 1, i - 1)
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = heap[i + 1]
  }
}

function sink (arr, i, maxSize) {
  let child = i * 2
  if (child <= maxSize) {
    if (child < maxSize && arr[child] < arr[child + 1]) child++
    if (arr[i] < arr[child]) {
      swap(arr, i, child)
      sink(arr, child, maxSize)
    }
  }
}

function swim (arr, i) {
  if (i > 1) {
    const parent = ~~(i / 2)
    if (arr[i] > arr[parent]) {
      swap(arr, i, parent)
      swim(arr, parent)
    }
  }
}

function swap (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

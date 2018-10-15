export default class MinPriorityQueue {
  constructor (valueAccessor = x => x) {
    this.heap = [null]
    this.valueAccessor = valueAccessor
  }

  enqueue (node) {
    this.heap.push(node)
    this.swim(node, this.heap.length - 1)
  }

  dequeue () {
    this.swap(1, this.heap.length - 1)
    const min = this.heap.pop()
    this.sink(this.heap[1], 1)
    return min
  }

  swim (node, n) {
    if (n > 1) {
      const parentIndex = ~~(n / 2)
      const value = this.valueAccessor(node)
      const valueP = this.valueAccessor(this.heap[parentIndex])

      if (value < valueP) {
        this.swap(n, parentIndex)
        this.swim(this.heap[parentIndex], parentIndex)
      }
    }
  }

  sink (node, n) {
    const size = this.heap.length - 1
    let child = n * 2
    if (child <= size) {
      const vp = this.valueAccessor(node)
      let vc = this.valueAccessor(this.heap[child])
      if (child + 1 <= size) {
        const tmp = this.valueAccessor(this.heap[child + 1])
        if (tmp < vc) {
          child++
          vc = tmp
        }
      }
      if (vc < vp) {
        this.swap(n, child)
        this.sink(this.heap[child], child)
      }
    }
  }

  swap (a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
  }

  size () {
    return this.heap.length - 1
  }

  isEmpty () {
    return this.size() === 0
  }
}

import fs from 'fs'
import { clock, printTime } from './utils'
import Graph from './graph'
// import DFS from './solve'
import DFS from './solve2'

const now = clock()

const FILE_NAME_IN = 'input.txt'
const file = fs.readFileSync(`./${FILE_NAME_IN}`, 'utf8')
const lines = file.split('\n')

const v = +lines[0]
const e = +lines[1]
const g = new Graph(v)

for (let i = 0; i < e; i++) {
  let [a, b] = lines[i + 2].split(' ')
  a = +a
  b = +b
  g.addEdge(a, b)
}

printTime(clock(now))

const dfs = new DFS(g, 0)

const path = dfs.pathTo(3)
console.log(path.join(' -> '))

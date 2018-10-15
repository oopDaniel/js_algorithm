import fs from 'fs'
import { clock, printTime } from './utils'
import Graph from './graph'
import Edge from './edge'
import SP from './solve'

const FILE_NAME_IN = 'input2.txt'
const file = fs.readFileSync(`./${FILE_NAME_IN}`, 'utf8')
const lines = file.split('\n')

const v = +lines[0]
const e = +lines[1]
const g = new Graph(v)

for (let i = 0; i < e; i++) {
  const parsed = lines[i + 2].split(' ')
  const numbers = parsed.map(x => +x)
  const edge = new Edge(...numbers)
  g.addEdge(edge)
}

const now = clock()

const sp = new SP(g, 0)

const node = 5
console.log(sp.pathTo(node))
console.log(sp.distTo(node))

printTime(clock(now))

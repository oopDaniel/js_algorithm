import fs from 'fs'
import { clock, printTime } from './utils'
import ST from './solve'

const st = new ST()

const FILE_NAME_IN = 'input.txt'
const file = fs.readFileSync(`./${FILE_NAME_IN}`, 'utf8')
const lines = file.split('\n')
const values = lines[0].split(', ')
const keys = lines[1].split(', ').map(c => +c)
const pairs = keys.map((key, i) => ({ key, value: values[i] }))

const now = clock()

pairs.forEach(p => st.put(p.key, p.value))

console.log(st.get(84))
console.log(st.get(4))
st.put(84, 'yoyo')
console.log(st.get(84))

printTime(clock(now))

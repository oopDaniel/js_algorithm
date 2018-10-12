import fs from 'fs'
import { clock, printTime } from './utils'
import solve from './solve'

const FILE_NAME_IN = 'input.txt'
const file = fs.readFileSync(`./${FILE_NAME_IN}`, 'utf8')
const lines = file.split('\n')
const keys = lines[0].split(', ')
const values = lines[1].split(', ').map(c => +c)
const pairs = keys.map((key, i) => ({ key, value: values[i] }))

const now = clock()

solve(pairs)

printTime(clock(now))

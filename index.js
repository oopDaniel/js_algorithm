import fs from 'fs'
import { clock, printTime } from './utils'
import solve from './solve'

const now = clock()

const FILE_NAME_IN = 'input.txt'
const file = fs.readFileSync(`./${FILE_NAME_IN}`, 'utf8')
const arr = file.split(', ').map(c => +c)

console.log(arr)
solve(arr)

printTime(clock(now))

console.log('Result: ', arr)

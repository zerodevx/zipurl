#!/usr/bin/env node
import { text } from 'node:stream/consumers'
import { unzipurl } from '../index.js'

const { argv, stdin, exit } = process
const input = argv.slice(2).join(' ') || (stdin.isTTY ? '' : (await text(process.stdin)).trim())
if (!input) {
  console.error('Error: No arguments found!')
  exit(1)
}
console.log(await unzipurl(input))

#! /usr/bin/env node
import getStdin from 'get-stdin'
import { unzipurl } from '../index.js'

(async () => {
  const arg = process.argv.slice(2).join(' ') || (await getStdin()).trim()
  if (!arg) {
    console.error('Error: No arguments found!')
    process.exit(9)
  }
  console.log(unzipurl(arg))
})()

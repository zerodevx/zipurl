#! /usr/bin/env node
import getInputs from './getInputs.js'
import { unzipurl } from '../index.js'

(async () => {
  console.log(unzipurl(await getInputs()))
})()

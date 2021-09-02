#! /usr/bin/env node
import getInputs from './getInputs.js'
import { zipurl } from '../index.js'

(async () => {
  console.log(zipurl(await getInputs()))
})()

#!/usr/bin/env node
import { unzipurl } from '../index.js'
import cli from './cli.js'

console.log(unzipurl(await cli()))

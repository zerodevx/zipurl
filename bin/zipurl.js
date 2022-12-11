#!/usr/bin/env node
import { zipurl } from '../index.js'
import cli from './cli.js'

console.log(zipurl(await cli()))

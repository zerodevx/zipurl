import getStdin from './stdin.js'

export default async function () {
  const arg = process.argv.slice(2).join(' ') || (await getStdin()).trim()
  if (!arg) {
    console.error('Error: No arguments found!')
    process.exit(9)
  }
  return arg
}

async function read() {
  const { stdin } = process
  if (stdin.isTTY) return ''
  const results = []
  let length = 0
  for await (const chunk of stdin) {
    results.push(chunk)
    length += chunk.length
  }
  return Buffer.concat(results, length).toString('utf8')
}

export default async function () {
  const arg = process.argv.slice(2).join(' ') || (await read()).trim()
  if (!arg) {
    console.error('Error: No arguments found!')
    process.exit(1)
  }
  return arg
}

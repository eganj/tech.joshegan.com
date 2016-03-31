var childProcess = require('child_process')
var fs = require('fs')

var nodeVersion = fs.readFileSync('.nvmrc', 'utf8').trim()

var command = "nvm install " + nodeVersion + " && nvm use " + nodeVersion
console.log('executing command: ' + command)
childProcess.exec(command, function(error, stdout, stderr) {
  if (stdout) console.log(stdout.toString())
  if (stderr) console.error(stderr.toString())
  if (error) console.error(error)
})

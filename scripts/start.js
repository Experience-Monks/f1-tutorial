var budo = require('budo')

budo('example/index.js', {
  live: true,
  open: true,
  dir: 'example'
}).on('connect', function (ev) {
	console.log('Server running on %s', ev.uri)
	console.log('LiveReload running on port %s', ev.livePort)
}).on('update', function (buffer) {
  console.log('bundle - %d bytes', buffer.length)
})

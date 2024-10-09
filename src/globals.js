window.chromecast_player = require('chromecast-player')

window.chromecast_player.prototype.setChromecastAddress = function(address) {
  this.chromecastAddress = address
}

window.chromecast_player.prototype._scan = function(ctx) {
  ctx.address = this.chromecastAddress || {host: '127.0.0.1', port: 8009}

  return Promise.resolve(ctx)
}

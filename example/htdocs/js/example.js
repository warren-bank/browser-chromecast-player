document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('button#launch-button').addEventListener('click', doLaunch)
})

var doLaunch = function() {
  if (!window.protobuf || !window.castv2 || !window.castv2_client || !window.chromecast_player) return

  var cc_ip   = document.querySelector('input#cc-ip').value
  var cc_port = document.querySelector('input#cc-port').value

  var tcp_host = document.querySelector('input#tcp-host').value
  var tcp_port = document.querySelector('input#tcp-port').value

  if (!cc_ip || !tcp_host || !tcp_port) return

  if (cc_port)  cc_port  = parseInt(cc_port,  10)
  if (tcp_port) tcp_port = parseInt(tcp_port, 10)

  var cc_options = {
    host: cc_ip,
    port: cc_port
  }

  var tcp_options = {
    hostname: tcp_host,
    port:     tcp_port,
    remote:   {address: cc_ip, family: 'IPv4', port: cc_port},
    api:      false
  }

  window.castv2.setProxy(tcp_options)

  ondeviceup(cc_options)
}

var ondeviceup = function(cc_options) {
  const player = window.chromecast_player();
  const media  = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/ED_1280.mp4';

  player.setChromecastAddress(cc_options);

  player.launch(media, (err, p) => {
    p.once('playing', () => {
      console.log('playback has started.');

      console.log('playback will pause in 15 seconds.');
      setTimeout(() => p.pause(), 15000);
    });
  });
}

### [_browser-chromecast-player_](https://github.com/warren-bank/browser-chromecast-player)

Browser build for [_chromecast-player_](https://github.com/xat/chromecast-player): A simple chromecast player

#### Build

```bash
npm install

# remove an unwanted dependency, so it's excluded from the build
rm -rf ./node_modules/chromecast-scanner

npm run build
```

#### CDN

```html
  <script src="//cdn.jsdelivr.net/npm/@warren-bank/browser-chromecast-player@1.0.0/dist/es2020/chromecast-player.js"></script>
```

#### Usage

1. start the [TCP proxy server](https://github.com/zquestz/ws-tcp-proxy/releases)
   * command-line:
     ```bash
       chromecast_ip='192.168.0.100'
       chromecast_port='8009'
       proxy_port='3000'

       ws-tcp-proxy "${chromecast_ip}:${chromecast_port}" --port "$proxy_port"
     ```
   * is a required workaround for the limitation that client-side javascript cannot make TCP socket connections
     - allows the client-side javascript to connect by websocket
     - pipes data from the websocket to the TCP socket
     - pipes data from the TCP socket to the websocket
2. run the [client-side javascript library](./dist/es2020/chromecast-player.js) in a web browser
   * [example](./example/htdocs/es2020.html)
   * dependencies:
     - [_protobufjs@6.8.8_](./example/htdocs/js/protobuf.nfo.txt)
     - [_browser-castv2@2.0.0_](./example/htdocs/js/castv2.nfo.txt)
     - [_browser-castv2-client@1.0.0_](./example/htdocs/js/castv2-client.nfo.txt)

#### Legal

* license for [_chromecast-player_](https://github.com/xat/chromecast-player/releases/tag/v0.2.3) is [MIT](https://github.com/xat/chromecast-player/blob/v0.2.3/LICENSE)
* license for [_browser-chromecast-player_](https://github.com/warren-bank/browser-chromecast-player/releases/tag/v1.0.0) is [GPL-2.0](https://github.com/warren-bank/browser-chromecast-player/blob/v1.0.0/LICENSE.txt)
  - only covers the content of this repo, which contains primarily build scripts

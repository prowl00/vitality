// OAuth proxy for Decap CMS GitHub backend
// Run with: node server.js
// Requires env vars: GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET

const http = require('http')
const { parse } = require('url')

const CLIENT_ID     = process.env.GITHUB_CLIENT_ID
const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET
const PORT          = process.env.PORT || 3001
const DEPLOY_SCRIPT = process.env.DEPLOY_SCRIPT || '/var/www/vhosts/thevitalitysource.ca/deploy.sh'

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error('Missing GITHUB_CLIENT_ID or GITHUB_CLIENT_SECRET env vars')
  process.exit(1)
}

const server = http.createServer(async (req, res) => {
  const { pathname, query } = parse(req.url, true)

  // CORS headers so the browser can talk to this proxy
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')

  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return }

  // Step 1 — redirect browser to GitHub login
  if (pathname === '/oauth/auth') {
    const params = new URLSearchParams({ client_id: CLIENT_ID, scope: 'repo,user' })
    res.writeHead(302, { Location: `https://github.com/login/oauth/authorize?${params}` })
    res.end()
    return
  }

  // Step 2 — GitHub sends code here; exchange it for a token
  if (pathname === '/oauth/callback') {
    const code = query.code
    if (!code) { res.writeHead(400); res.end('Missing code'); return }

    try {
      const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ client_id: CLIENT_ID, client_secret: CLIENT_SECRET, code }),
      })
      const { access_token: token } = await tokenRes.json()
      const payload = JSON.stringify({ token, provider: 'github' })

      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
      res.end(`<!DOCTYPE html><html><body><script>
(function () {
  var payload = ${payload};
  function onMessage(e) {
    window.opener.postMessage(
      'authorization:github:success:' + JSON.stringify(payload),
      e.origin
    );
  }
  window.addEventListener('message', onMessage, false);
  window.opener.postMessage('authorizing:github', '*');
})();
</script></body></html>`)
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/html' })
      res.end(`<script>window.opener&&window.opener.postMessage('authorization:github:error:${err.message}','*')</script>`)
    }
    return
  }

  // Webhook: GitHub push → rebuild site on server
  if (pathname === '/webhook/deploy' && req.method === 'POST') {
    const { execFile } = require('child_process')
    execFile(DEPLOY_SCRIPT, (err, stdout, stderr) => {
      if (err) console.error('Deploy failed:', stderr)
      else console.log('Deploy succeeded:', stdout)
    })
    res.writeHead(200)
    res.end('Deploy triggered')
    return
  }

  res.writeHead(404); res.end()
})

server.listen(PORT, '127.0.0.1', () =>
  console.log(`OAuth proxy listening on 127.0.0.1:${PORT}`)
)

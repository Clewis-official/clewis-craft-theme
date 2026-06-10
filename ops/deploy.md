# VM Deploy

This repo is intended to run on the DigitalOcean droplet at `162.243.117.101` from `/var/www/clewis-craft-theme`.

## One-time server setup
1. Copy `ops/systemd/clewis-craft-theme.service` to `/etc/systemd/system/clewis-craft-theme.service`.
2. Copy `ops/caddy/Caddyfile` into `/etc/caddy/Caddyfile`.
3. Reload services:
   - `sudo systemctl daemon-reload`
   - `sudo systemctl enable --now clewis-craft-theme`
   - `sudo caddy validate --config /etc/caddy/Caddyfile`
   - `sudo systemctl reload caddy`

## Manual deploy flow
Run on the server from `/var/www/clewis-craft-theme`:

```bash
git pull
npm install
npm run build
sudo systemctl restart clewis-craft-theme
```

## Local service checks
```bash
curl -I http://127.0.0.1:3000
curl -sS -X POST http://127.0.0.1:3000/api/chat \
  -H 'Content-Type: application/json' \
  -d '{"messages":[{"role":"user","text":"What kind of roles is Clewis targeting?"}]}'
```

## Caddy checks
```bash
sudo systemctl status caddy --no-pager
sudo journalctl -u caddy -n 50 --no-pager
sudo caddy validate --config /etc/caddy/Caddyfile
```

## App service checks
```bash
sudo systemctl status clewis-craft-theme --no-pager
sudo journalctl -u clewis-craft-theme -n 100 --no-pager
```

## Cloudflare DNS
Create proxied records:
- `A` record for `aaronclewis.com` -> `162.243.117.101`
- `CNAME` record for `www` -> `aaronclewis.com`
- `CNAME` record for `hire` -> `aaronclewis.com`

Expected public behavior:
- `https://aaronclewis.com` serves the main site
- `https://www.aaronclewis.com` redirects to apex
- `https://hire.aaronclewis.com` serves the same site for now

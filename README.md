# mygithubpage

The source of everything served at **https://ovenytt.no**.

Push to `main` and `.github/workflows/static.yml` runs on the GHOST self-hosted
runner, which robocopies the tree to `\\nassejr\web\ovenytt`. The Synology web
server on :8080 serves it, and the NAS Cloudflare tunnel puts it on the domain.
A change is live a minute or two after the push.

## What is hand-written and what is generated

| Path | Owner |
|---|---|
| `index.html` | **Hand-written. Edit it here.** |
| `ovecv/` | Hand-written. |
| `news/` | Generated 04:00 by `pantheon-news-service` via Hermes (`Hermes/hermes/pages_publisher.py`). |
| `weather/index.html` | Generated 05:00 by `astraeus-oracle` via Hermes (`Hermes/hermes/weather_publisher.py`). |
| `hades/index.html` | Generated 16:00 by `pantheonBackend` `HadesSnapshotGenerator` via Hermes. |

Editing a generated page by hand works until the next night, when the producer
overwrites it. Change the producer instead.

Until 2026-09-20 `index.html` was generated too — a Java text block in
`pantheonBackend`, republished nightly, which silently reverted anything edited
here. That is gone. The homepage is a normal file now.

Full chain and ownership rules: `pantheonBackend/docs/ovenytt-publishing.md`.

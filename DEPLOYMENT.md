# Build releases and server deployment

Every push to `main`, including a merged pull request, triggers the release
workflow. It compiles the exact commit, creates `portfolio-build.zip`, tests
the packaged app, and publishes a GitHub Release named
`build-<run-number>-<commit>`. No manual version tag or extra secret is needed.

The latest successful build of the current main commit is marked **Latest**.
Older builds finishing later are published without replacing Latest. A failed
build does not publish a release. A manual workflow run on main is also supported.

## ZIP contents

The ZIP contains the Next.js standalone production server (`server.js`),
runtime `node_modules`, `.next` build files, `.next/static`, `public`, and
`BUILD_COMMIT`. It also has a separate `portfolio-build.zip.sha256` release asset.
There is no Docker image archive or Compose file in the ZIP.

The build targets **Linux x86-64 (amd64) with Node.js 22 Alpine**. Run it with that
runtime; its native dependencies are compiled for Alpine, not a generic Ubuntu
host or an ARM server. The workflow's Dockerfile exports only compiled app files
through its `build-files` stage.

Releases: https://github.com/Abhijith126/portfolio/releases

Stable asset URL for the latest build:

```text
https://github.com/Abhijith126/portfolio/releases/latest/download/portfolio-build.zip
```

## Server-only Docker Compose

Keep your deployment `docker-compose.yml` on the server, outside this repository.
A separate file is supplied for this purpose. It uses `node:22-alpine`, resolves
the latest release once at container startup, downloads that release's ZIP and
checksum, verifies and extracts the files, and starts `node server.js` as the
non-root node user. It does not install npm dependencies or compile the app.

Copy that file to a deployment folder on the server, then run:

```bash
docker compose up -d --wait --wait-timeout 180
docker compose logs --tail=100 portfolio
```

The default site URL is `http://SERVER_IP:5172`. Docker Engine with Compose v2
and outbound internet access to GitHub, Docker Hub, and Alpine package mirrors
are required. Download tools are installed inside the container at startup.

To deploy a newly published release:

```bash
docker compose up -d --force-recreate --wait --wait-timeout 180
```

The latest release is resolved on each container start, including restarts.
A running container continues serving its downloaded build until restarted or
recreated. For a fixed version or rollback, put an existing release tag in the
server's `.env` file:

```dotenv
PORTFOLIO_RELEASE=build-2-examplecommit
PORTFOLIO_PORT=5172
```

Replace that sample release tag with the exact tag shown in GitHub Releases,
then recreate the container. To return to automatically selecting the latest
release on startup, set `PORTFOLIO_RELEASE=latest`.

The Compose startup replaces only `/app` inside its own container. It does not
mount or alter a host application folder. The ZIP, checksum, and Compose file
are managed independently: the repository publishes the app; the server owns
the runtime configuration.

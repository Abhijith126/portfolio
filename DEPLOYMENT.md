# Deploy a release on your server

The release workflow builds a production Docker image for **Linux x86-64
(amd64)**. The archive contains all compiled Next.js files and runtime
dependencies inside `image.tar`, plus `docker-compose.yml`, `.env`, this guide,
and `SHA256SUMS`. You only need Docker Engine with the Compose v2 plugin on your
server; Node.js, npm, Git, and registry credentials are not required.

## Create a release

After the workflow is on `main`, pull the current code and push a new version tag:

```bash
git switch main
git pull --ff-only
git tag v1.0.0
git push origin v1.0.0
```

Use a new `v*` tag for each release. The workflow builds the exact tagged commit,
starts it with Compose, checks the homepage, public JSON data, and JavaScript,
and then creates a GitHub Release with a deployment archive and SHA-256 checksum.
Tag names must also be valid Docker image tags; `v1.0.0` is a suitable example.
Keep released tags on their original commits.

Pushes to `main`, pull requests targeting `main`, and manual runs build and check
the image and store the same archive as an Actions artifact for 14 days. They do
not create a release unless the selected ref is a `v*` tag. Release assets remain
available until the release/assets are deleted. No extra GitHub secrets are needed.

## Download and start

Run on the server. Replace `v1.0.0` with the version you want to deploy:

```bash
VERSION=v1.0.0
mkdir -p ~/portfolio
cd ~/portfolio
ARCHIVE="portfolio-$VERSION-linux-amd64.tar.gz"
BASE_URL="https://github.com/Abhijith126/portfolio/releases/download/$VERSION"

curl -fL --retry 3 -o "$ARCHIVE" "$BASE_URL/$ARCHIVE"
curl -fL --retry 3 -o "$ARCHIVE.sha256" "$BASE_URL/$ARCHIVE.sha256"
sha256sum -c "$ARCHIVE.sha256"
tar -xzf "$ARCHIVE"
sha256sum -c SHA256SUMS
docker load -i image.tar
docker compose up -d --wait --wait-timeout 90
docker compose ps
```

The site is available on `http://SERVER_IP:5172`. Keep this same deployment
directory when upgrading so Compose replaces the existing service. Download,
verify, extract, load, and start the new release using the same commands.

The archive includes an `.env` file that selects the image version. After
verifying the files, change `PORTFOLIO_PORT=5172` if you want another host port.
For a reverse proxy running directly on the server, you can set
`PORTFOLIO_PORT=127.0.0.1:5172` to bind only to localhost. For a proxy in another
container, configure the shared Docker network and hostname to match your setup.
Extracting a new release replaces `.env`, so reapply any port customization before
starting it. The container listens on port 3000 internally.

Compose uses only the locally loaded image (`pull_policy: never`). The app runs
as a non-root user, restarts unless stopped, and has a health check and bounded
container logs. There is no source build on the server.

## Roll back or troubleshoot

Load an older release archive and put its version in `.env`, then run
`docker compose up -d --wait --wait-timeout 90` again. This replaces the container
with that version. Do not delete the old images until you no longer need them.

```bash
docker compose logs --tail=100 portfolio
docker compose ps
```

An `exec format error` usually means the server architecture does not match the
image. This workflow targets `linux/amd64`; ARM servers need a separate ARM build.

## Build locally when needed

The Dockerfile builds the checked-out source with locked dependencies and uses
Next.js standalone output:

```bash
docker build -t portfolio:local .
PORTFOLIO_VERSION=local docker compose up -d --wait --wait-timeout 90
```

The image uses Node.js 22 and includes `public` and `.next/static` alongside the
standalone server. Google fonts are fetched during the build, so the build runner
needs outbound internet access. The server only runs the finished image.

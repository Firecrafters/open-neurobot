FROM oven/bun:1.2.22-debian

# Build args (defaults for local builds)
ARG GITHUB_REPOSITORY=""
ARG APP_DIR="/workspace"
ENV APP_DIR=${APP_DIR}

LABEL org.opencontainers.image.source="https://github.com/${GITHUB_REPOSITORY}"
LABEL org.opencontainers.image.description="A Bun + TypeScript container to use with Open-NeuroBot."
LABEL org.opencontainers.image.licenses="MIT"

# Install OS packages
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates curl build-essential git \
    && rm -rf /var/lib/apt/lists/*

# Set absolute workdir
RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

# Copy package manifests first (cache-friendly)
COPY package.json bun.lock* ${APP_DIR}/

# Install dependencies using bun
RUN bun install --frozen-lockfile

# Copy rest of the repo (this includes .vscode if you want it in the image)
COPY --chown=bun:bun . ${APP_DIR}

# Build step (if you have a build script)
RUN bun run build || true

# Ensure permissions (tolerant)
RUN if [ -d "${APP_DIR}" ]; then chown -R bun:bun "${APP_DIR}" || true; fi

USER bun
ENV HOME=/home/bun

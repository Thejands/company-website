# Load Node >=22 for hooks (Astro 6 requirement). Sourced by husky scripts.
set -e

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
if [ -s "$NVM_DIR/nvm.sh" ]; then
  # shellcheck disable=SC1090
  . "$NVM_DIR/nvm.sh"
elif [ -s "/opt/homebrew/opt/nvm/nvm.sh" ]; then
  . "/opt/homebrew/opt/nvm/nvm.sh"
elif [ -s "/usr/local/opt/nvm/nvm.sh" ]; then
  . "/usr/local/opt/nvm/nvm.sh"
fi

if [ -s "$NVM_DIR/nvm.sh" ] || command -v nvm >/dev/null 2>&1; then
  nvm use --silent 2>/dev/null || nvm use 22 --silent 2>/dev/null || true
fi

if command -v fnm >/dev/null 2>&1 && [ -f .nvmrc ]; then
  eval "$(fnm env 2>/dev/null)" || true
  fnm use --silent-if-initialized 2>/dev/null || fnm use 22 2>/dev/null || true
fi

NODE_VERSION="$(node -v 2>/dev/null || echo "v0")"
NODE_MAJOR="${NODE_VERSION#v}"
NODE_MAJOR="${NODE_MAJOR%%.*}"

if [ "${NODE_MAJOR:-0}" -lt 22 ]; then
  echo "husky: Node ${NODE_VERSION} is not supported. This project requires Node >=22.12.0."
  echo "Fix: nvm install 22 && nvm use 22   (or: fnm install 22 && fnm use 22)"
  exit 1
fi
